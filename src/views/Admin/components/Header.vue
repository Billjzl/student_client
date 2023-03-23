<template>
    <header>
        <h1>学生选课管理系统</h1>
        <nav>
            <ul>
                <li><a href="#">首页</a></li>
                <li><a href="#">课程管理</a></li>
                <li><a href="#">学生管理</a></li>
                <li><a href="#">选课管理</a></li>
            </ul>
        </nav>
    </header>
</template>
  
<script>
export default {
    name: 'Header'
}
</script>
  
<style>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2196f3;
    color: white;
    padding: 1rem;
}

h1 {
    font-size: 2rem;
    margin: 0;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav li {
    margin-left: 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
}
</style>