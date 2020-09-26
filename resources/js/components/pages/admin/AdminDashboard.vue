<template>
  <!-- <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Dashboard Component</div>

                    <div class="card-body">
                        I'm a dashboard component.
                    </div>
                </div>
            </div>
        </div>
  </div>-->
  <div>
    <AdminNav />
    <AdminSide />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid"></div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

   

    <AdminFooter />
  </div>
  <!-- ./wrapper -->
</template>

<script>
import AdminNav from "./AdminHeader";
import AdminSide from "./AdminMainSideBar";
import AdminFooter from "./AdminFooter";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("Component mounted.");
    window.$('body').Layout();
    window.$('[data-widget="pushmenu"]').PushMenu();
    window.$('[data-widget="control-sidebar"]').ControlSidebar();
    window.$('ul[data-widget="treeview"]').Treeview('init');
    window.$('.dropdown').Dropdown();
    
  },
  components: {
    AdminNav,
    AdminSide,
    AdminFooter
  },
};
</script>