<template>
    <form action="/action_page.php" class="justify-content-md-center">
    <div class="container ">
        <div class="form-group col col-lg-4">
            <label for="email">Имэйл Хаяг: </label>
            <input type="email" class="form-control" id="email" required>
        </div>
        <div class="form-group col-lg-4">
            <label for="pwd">Нууц үг:</label>
            <input type="password" class="form-control" id="pwd" required>
        </div>
        <div class="form-group form-check">
            <label class="form-check-label">
            <input class="form-check-input" type="checkbox"> Remember me
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Нэвтрэх</button>
        <router-link to="register"><button type="submit" class="btn btn-secondary">Бүртгүүлэх</button></router-link>
    </div>
    </form>
</template>
<style>
.justify-content-md-center{
    margin-top: 40px;
    width:60%;
    margin-left: auto;
    margin-right: auto;
}
</style>
