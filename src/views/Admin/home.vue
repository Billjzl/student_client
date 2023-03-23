<template>
  <div>
    <el-container>
      <el-main>
        <h1>admin home</h1>
        <TeacherManage />
        <logout></logout>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import TeacherManage from "../Admin/teacherManage"
import Logout from "@/components/logout";
export default {
  name: "home",
  components: { Logout },
}
</script>

<style scoped></style>