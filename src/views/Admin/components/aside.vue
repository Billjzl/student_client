<template>
    <aside>
        <nav>
            <ul>
                <li><a href="#">课程管理</a></li>
                <li><a href="#">学生管理</a></li>
                <li><a href="#">选课管理</a></li>
            </ul>
        </nav>
    </aside>
</template>
  
<script>
export default {
    name: 'Aside'
}
</script>
  
<style>
aside {
    flex-basis: 25%;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

nav li {
    margin: 1rem 0;
}

nav a {
    color: #2196f3;
    text-decoration: none;
    font-size: 1.2rem;
}
</style>