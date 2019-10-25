<!--Энд нэг тамганы дэлгэрэнгүй мэдээллийг харуулах болно-->
<template>
    <div>
        <div class="card mb-3" style="max-width: 100%;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Тамганы нэр: {{$route.params.name}}</h5>
                        <h5 class="card-title">Бүртгэгдсэн огноо: {{$route.params.date}}</h5>
                        <h5 class="card-title">Хэрэглэгчдийн тоо: {{$route.params.id}}</h5>
                        <p class="card-text">Бусад мэдээлэл: {{$route.params.define}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
