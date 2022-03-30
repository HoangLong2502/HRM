<template>
  <div id="PerView" class="per-view-container relative bg-gray-2">
    <div class="per-view-header w100 f jcb aic bg-white-1" style="box-shadow: 0px 0px 10px rgba(68, 79, 120, 0.15)">
      <div class="f aic">
        <div class="f aic ml2">
          <img src="../assets/perView/back.png" alt="">
          <p class="h5 ml2 mr2 gray">Quay lại</p>
        </div>
        <div class="f jcb aic pt05 pb05 pl1 pr1  bg-gray-1">
          <img src="../assets/imgLogoCompany.png" alt="">
          <div class="ml05 mr2">
            <p class="h6 blue-1">Công ty CP Công Nghệ IDT</p>
            <p class="h7 gray mt05">Giám đốc Công Nghệ</p>
          </div>
          <img src="../assets/perView/down.png" alt="">
        </div>
      </div>
      <div class="f jcb aic">
        <div class="mr2 align-c" style="border: 1px solid #D9DDE8; border-radius: 40px; width: 39px; height: 39px">
          <img style="margin: 10px" src="../assets/perView/bell.png" alt="">
        </div>
        <div class="f jcb aic">
          <img src="../assets/imgLogoCompany.png" alt="">
          <div class="mr2 ml1">
            <p class="h6 blue-1">Nguyễn Thị Bill</p>
            <p class="h7 gray mt05">Giám đốc Công Nghệ</p>
          </div>
        </div>
      </div>
    </div>
    <div class="per-view-content pt15 pl2 pr2">
      <div class="content__title f aic">
        <p class="h3 mr1 black">Danh sách nhân sự</p>
        <p class="h5 pl1 blue-1" style="border-left: 1px solid #C7C9D9">Danh sách nhân sự</p>
      </div>
      <div class="content__tab-bar f jcb aic mt15 ">
        <div class="f relative aic">
          <img src="../assets/Enter email.png" class="absolute ml1" alt="">
          <input id="myInput" @keyup="handleFilter" style="height: 45px; width: 450px; padding-left: 3em" type="text" placeholder="Tìm kiếm nhân sự" name="">
          <div class="f jcc aic ml05 border-radius" style="border: 1px solid #C7C9D9; width: 45px; height: 45px ">
            <img src="../assets/typeSearch.png" alt="">
          </div>
        </div>
        <div class="f aic border-radius bg-blue-1 pr15 pl15" style="height: 45px">
           <img src="../assets/action.png" alt="">
           <p class="h6 ml05 white">Hành động</p>
        </div>
      </div>
      <div class="content-list pt15 pb15">
        <div class="content-list__header f aic pr15 pl15 mb15">
          <div class="mr2">
            <input class="checkbox" type="checkbox">
          </div>
          <div class="mr2 h6 blue-1 align-c" style="width: 30px">
            STT
          </div>
          <div class="f jcb aic w100 h6 blue-1">
            <h6 style="width: 200px">Nhân viên</h6>
            <h6 style="width: 70px">Giới tính</h6>
            <h6 style="width: 75px">Ngày sinh</h6>
            <h6 style="width: 150px">Phòng ban</h6>
            <h6 style="width: 50px">Vị trí</h6>
            <h6 style="width: 98px">Chức vụ</h6>
            <h6 style="width: 77px">Ngày vào</h6>
            <h6 class="align-c" style="width: 125px">Trạng thái</h6>
          </div>
        </div>
        <div class="content-list__body f fw aic">
          <div v-for="(item, index) in personnelActive" :key="index" class="item-person f jcb aic w100 border-radius mb1 pr15 pl15 pt1 pb1 bg-white-1">
            <div class="mr2">
              <input class="checkbox" type="checkbox"> 
            </div>
            <div class="mr2 h6 align-c" style="width: 30px">
              {{index + 1}}
            </div>
            <div class="f jcb aic w100 h6">
              <div style="width: 200px" class="f ">
                <img class="mr05" src="../assets/imgLogoCompany.png" alt="" style="height: 48px">
                <div>
                  <h6 class="per-name mb05" style="color: #2B79F7">{{item.name}}</h6>
                  <h7>{{item.id}}</h7>
                </div>
              </div>
              <h7 style="width: 70px">{{item.sex}}</h7>
              <h7 style="width: 75px">{{item.dob}}</h7>
              <h7 style="width: 150px">{{item.Department}}</h7>
              <h7 style="width: 50px">{{item.Position1}}</h7>
              <h7 style="width: 98px">{{item.Position2}}</h7>
              <h7 style="width: 77px">{{item.dayIn}}</h7>
              <div @click="handleStatus" class="pt05 pb05 pl1 pr1 border-radius" style="background-color: #06C270">
                <h6 class="white">Đang làm việc</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="per-view-more w100 fixed f jce align-r pl2 pr2 pb2" style="bottom: 150px">
      <div class="align-c active ml05 bg-white-1" style="width: 29px; height: 29px; border-radius: 40px; border: 1px solid #CCD2E2; padding-top: 4px; color: #444F78"><h7 @click="handleMorePer">1</h7></div>
      <div class="align-c ml05 bg-white-1" style="width: 29px; height: 29px; border-radius: 40px; border: 1px solid #CCD2E2; padding-top: 4px; color: #444F78"><h7 @click="handleMorePer">2</h7></div>
      <div class="align-c ml05 bg-white-1" style="width: 29px; height: 29px; border-radius: 40px; border: 1px solid #CCD2E2; padding-top: 4px; color: #444F78" ><h7 @click="handleMorePer">3</h7></div>
      <div class="align-c ml05 bg-white-1" style="width: 29px; height: 29px; border-radius: 40px; border: 1px solid #CCD2E2; padding-top: 4px; color: #444F78"><h7 @click="handleMorePer">4</h7></div>
    </div>
    <div class="per-view-button-back fixed f aic jcc mt4" style="left: 45%; bottom: 50px">
      <router-link to="/">
        <button class="button border-radius h6 pt1 pb1 pr1 pl1 bg-white-1 blue-1" style="box-shadow: 0px 0px 16px rgba(88, 92, 162, 0.24);">
          <img src="../assets/home.png" alt="">
          Màn hình chính
        </button>
      </router-link>
    </div>
    <div class="per-view-footer fixed w100 f jcb aic pt05 pb05 pl1 pr1 bg-white-1" style="box-shadow: 0px 0px 10px rgba(68, 79, 120, 0.15); bottom: 0">
      <p class="h7 blue-1">HRM APP v1.0.0-beta7</p>
      <div class="f aic">
        <p class="h6 mr05" style="color: #2B79F7">Điều khoản và điều kiện</p>
        <img style="width: 12px; height: 12px" src="../assets/more.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { Vue } from 'vue-property-decorator';

export default Vue.extend({
  el: '#PerView',
  data() {
    return {
      personnel: [
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Mỹ Tâm",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "IT IDT",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
          stuatus: "Đang làm việc"
        },
        { 
          id: "NVIDT25022001",
          name: "Lê Bá Hoàng Long",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "IT IDT",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Thế Anh",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Hành chính nhân sự",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Trung Quân",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Design",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Tùng Sơn",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "UI/UX",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Thế Anh",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Hành chính nhân sự",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Trung Quân",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Design",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Tùng Sơn",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "UI/UX",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Thế Anh",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Hành chính nhân sự",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Trung Quân",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Design",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Tùng Sơn",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "UI/UX",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        }
        ,
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Thế Anh",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Hành chính nhân sự",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Trung Quân",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Design",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Tùng Sơn",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "UI/UX",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Mỹ Tâm",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "IT IDT",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
          stuatus: "Đang làm việc"
        },
        { 
          id: "NVIDT25022001",
          name: "Lê Bá Hoàng Long",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "IT IDT",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Thế Anh",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Hành chính nhân sự",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Mỹ Tâm",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "IT IDT",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
          stuatus: "Đang làm việc"
        },
        { 
          id: "NVIDT25022001",
          name: "Lê Bá Hoàng Long",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "IT IDT",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Thế Anh",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Hành chính nhân sự",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
      ],
      personnelWait: [

      ],
      personnelActive: [
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Mỹ Tâm",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "IT IDT",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
          stuatus: "Đang làm việc"
        },
        { 
          id: "NVIDT25022001",
          name: "Lê Bá Hoàng Long",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "IT IDT",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Thế Anh",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Hành chính nhân sự",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Trung Quân",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "Design",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
        { 
          id: "NVIDT25022001",
          name: "Nguyễn Tùng Sơn",
          sex: "Nam",
          dob: "25/02/2001",
          Department: "UI/UX",
          Position1: "Hỗ trợ",
          Position2: "Nhân viên",
          dayIn: "30/12/2021",
        },
      ]
    }
  },
  watch: {
    
  },
  methods: {
    handleStatus() {
      console.log("Hello")
    },
    handleFilter() {
      var input = document.getElementById("myInput");
      var filter = input.value.toUpperCase();
      console.log(filter)
      this.personnelActive = [];
      this.personnelWait = [];
      if(!filter) {
        for(let i = 0; i < 5; i++) {
        this.personnelActive.push(this.personnel[i]);
      }
      }
      else {
        for (let i = 0; i < this.personnel.length; i++) {
            var perName = this.personnel[i].name;
            console.log(perName);
            var txtValue = perName;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                this.personnelWait.push(this.personnel[i])
                console.log(this.personnelWait)
            }
        }
        for(let i = 0; i < this.personnelWait.length ; i++) {
          this.personnelActive.push(this.personnelWait[i]);
        }
      }
    },
    handleMorePer(event) {
      var tickactive = document.getElementsByClassName('active');
      if(tickactive.length == 1) {
        tickactive[0].classList.remove('active')
      }
      console.log(tickactive)
      var button = event.target;
      var per = button;
      var active = event.target.parentElement;
      active.classList.add('active');
      var number = per.innerText;
      this.personnelActive = [];
      for(let i = (number * 5 -5); i < (number * 5); i++) {
        this.personnelActive.push(this.personnel[i]);
      }
    }
  }
})
</script>


<style scoped>
#PerView {
  width: 100%;
  height: 100vh;
}

.checkbox {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  padding: 0;
}

.active {
  background-color: #444F78;
  color: white !important;
}
</style>


