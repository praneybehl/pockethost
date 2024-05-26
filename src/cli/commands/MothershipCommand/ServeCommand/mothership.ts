import {
  DATA_ROOT,
  DEBUG,
  LS_WEBHOOK_SECRET,
  mkContainerHomePath,
  MOTHERSHIP_APP_DIR,
  MOTHERSHIP_HOOKS_DIR,
  MOTHERSHIP_MIGRATIONS_DIR,
  MOTHERSHIP_NAME,
  MOTHERSHIP_PORT,
  MOTHERSHIP_SEMVER,
  PH_VERSIONS,
} from '$constants'
import { PocketbaseService, PortService } from '$services'
import { LoggerService } from '$shared'
import { gracefulExit } from '$util'
import copyfiles from 'copyfiles'

export type MothershipConfig = { isolate: boolean }

const _copy = (src: string, dst: string) => {
  const { error } = LoggerService().create(`copy`)

  return new Promise<void>((resolve) => {
    copyfiles(
      [src, dst],
      {
        verbose: DEBUG(),
        up: true,
      },
      (err) => {
        if (err) {
          error(err)
          throw err
        }
        resolve()
      },
    )
  })
}

export async function mothership(cfg: MothershipConfig) {
  const { isolate } = cfg
  const logger = LoggerService().create(`Mothership`)
  const { dbg, error, info, warn } = logger
  info(`Starting`)

  dbg(`Isolation mode:`, { isolate })

  await PortService({})

  /** Launch central database */
  info(`Serving`)
  const pbService = await PocketbaseService({})
  const args = {
    version: MOTHERSHIP_SEMVER(),
    subdomain: MOTHERSHIP_NAME(),
    instanceId: MOTHERSHIP_NAME(),
    port: MOTHERSHIP_PORT(),
    dev: DEBUG(),
    env: {
      DATA_ROOT: mkContainerHomePath(`data`),
      LS_WEBHOOK_SECRET: LS_WEBHOOK_SECRET(),
    },
    extraBinds: [
      `${DATA_ROOT()}:${mkContainerHomePath(`data`)}`,
      `${MOTHERSHIP_HOOKS_DIR()}:${mkContainerHomePath(`pb_hooks`)}`,
      `${PH_VERSIONS()}:${mkContainerHomePath(`pb_hooks`, `versions.cjs`)}`,
      `${MOTHERSHIP_MIGRATIONS_DIR()}:${mkContainerHomePath(`pb_migrations`)}`,
      `${MOTHERSHIP_APP_DIR()}:${mkContainerHomePath(`ph_app`)}`,
    ],
  }
  dbg(args)
  const { url, exitCode } = await pbService.spawn(args)
  info(`Mothership URL for this session is ${url}`)
  exitCode.then((c) => {
    gracefulExit(c)
  })
}
