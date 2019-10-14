<template>
<div class="container">
    <form>
        <div class="form-group">
            <label for="formGroupExampleInput">Эцэг/Эхийн нэр</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Өөрийн нэр</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail4">Мэйл хаяг</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
                <label for="inputPassword4">Нууц үг</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Тамганы нэр</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Аймгаа/Дүүрэг/ оруул">
        </div>
        <div class="form-group">
            <label for="inputAddress2">Тамганы талаарх дэлгэрэнгүй мэдээлэл</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Сум, баг оруул">
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control">
                    <option selected>Аймаг...</option>
                    <option>Архангай</option>
                    <option>Булган</option>
                    <option>Баянхонгор</option>
                    <option>Говь-Алтай</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity">
            </div>
        </div>
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    Check me out
                </label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Бүртгүүлэх</button>
    </form>
</div>
</template>
