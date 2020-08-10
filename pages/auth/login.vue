<template>
    <div class="signinPage">
        <div class="container">
            <div class="userIcon">
                <i class="fas fa-user fa-3x"></i>
            </div>
            <h2 class="title">ログイン</h2>

            <form class="form">
                <div class="form-group">
                    <label>メールアドレス</label>
                    <input type="email" name="email" class="form-control" placeholder="メールアドレスを入力してください">
                </div>

                <div class="form-group">
                    <label>パスワード</label>
                    <input type="password" name="password" class="form-control" placeholder="パスワードを入力してください">
                </div>

                <div class="form-group text-center">
                    <button type="submit" class="loginBtn">ログイン</button>
                </div>
                <div class="linkToRegister">
                    <nuxt-link to="/register">アカウント作成はこちら</nuxt-link>
                </div>
                <div class="text-center">
                    <a href="#">パスワードを忘れた</a>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_custom/_login.scss";
</style>
