<script lang="ts">
  import Logo from '$components//Logo.svelte'
  import UserLoggedIn from '$components/helpers/UserLoggedIn.svelte'
  import UserLoggedOut from '$components/helpers/UserLoggedOut.svelte'
  import LoginForm from '$components/login-register/LoginForm.svelte'
</script>

<svelte:head>
  <title>Home - PocketHost</title>
</svelte:head>

<div>
  <UserLoggedIn>Welcome</UserLoggedIn>

  <UserLoggedOut>
    <div class="min-h-screen flex items-center justify-center">
      <div>
        <Logo />
        <LoginForm />
      </div>
    </div>
  </UserLoggedOut>
</div>
