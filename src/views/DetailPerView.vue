<template>
    <div id="PerDetail" class="w100 h100vh bg-gray-1">
        <PerHeader></PerHeader>
        <div class="container--title f jcb pt15 pl15 pr15 pb15">
            <div class="title--left f aic">
                <p class="h3 mr1 black">Chi tiết nhân sự</p>
                <p class="p5 pl05 pr1 gray" style="border-left: 1px solid #C7C9D9">Danh sách nhân sự</p>
                <p class="h5 pl05 blue-1">
                    <img src="../assets/right.png" alt="" class="mr1">
                    Chi tiết nhân sự
                </p>
            </div>
            <div class="title--right f aic">
                <div class="f aic border-radius bg-blue-1 pr15 pl15" style="height: 45px">
                    <img src="../assets/repair.png" alt="">
                    <p class="h6 ml05 white">Chỉnh sửa</p>
                </div>
            </div>
        </div>
        <div class="container--content border-radius f jcb pl15 pr15">
            <div class="content__info border-radius bg-white-1" style="width: 1398px; height: 700px;">
                <div class="info__header f aic pt1 pb1 pr1 pl1">
                    <div class="info__header--img mr15">
                        <img src="../assets/imgInfo.png" alt="">
                    </div>
                    <div class="info__header--text">
                        <h3 class="blue-1">Trần Minh Tiến</h3>
                        <h7 class="gray">Nam - 23 tuổi</h7>
                        <div class="f aic mt05">
                            <img src="../assets/phone.png" alt="" class="mr1" style="height: 15px">
                            <p class="mr1">Số điện thoại:</p>
                            <p class="gray">0829116343</p>
                        </div>
                    </div>
                </div>
                <div class="info__nav f pf1 pt05 pb05 bg-gray-1">
                    <div v-for="item in NavItem" :key="item" class="ml15">
                        <img :src="item.img" alt="">
                        <h7 class="gray">{{item.text}}</h7>
                    </div>
                </div>
                <div v-for="item in infoBasic" :key="item" class="info__basic info__detail pt1 pl1 pr1 pb1">
                    <div>
                        <div class="f aic">
                            <div @click="handleCOInfo" class="open-info mr15 align-c" style="width: 20px; height:20px; border-radius: 4px; border: 1px solid #C7C9D9; transition: 0.4s; cursor: pointer; transform: rotate(-90deg)">
                                <img @click="handleCOInfo" src="../assets/perView/down.png" alt="">
                            </div>
                            <h5>{{item.header}}</h5>
                        </div>
                        <div class="info__basic--detail f fw w100">
                            <div v-for="item in item.title" :key="item" class="mt1" style="width:30% ; margin-right: 3%">
                                <h6 class="mb05">{{item.h1}}</h6>
                                <h7>{{item.h2}}</h7>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content__note bg-white-1 border-radius" style="width: 450px; height: 700px; box-shadow: 0px 0px 10px rgba(68, 79, 120, 0.15);">
                <div class="note__header bg-gray-1" style="border-radius: 8px 8px 0 0">
                    <div class="f aic pt05 pb05 pl1 pr05" style="border-bottom: 2px solid #585CA2">
                        <img src="../assets/note.png" alt="">
                            <h5 class="blue-1 ml05">Ghi chú</h5>
                    </div>
                </div>
                <div class="note__body pt05 pr1 pl1 pb1">
                    <div>
                        <div>
                            <h6>Nội dung</h6>
                            <textarea class="note--input border-radius h7 w100 mt05 pt05 pr05 pl05 pb05" 
                            type="text" 
                            @keyup.enter="handleNote" placeholder="Nhập nội dung" 
                            style="height: 166px; resize: none; border: 1px solid #C7C9D9; font-family: inter"></textarea>
                            <div class="f jcb pt05 pb05">
                                <div class="f aic">
                                    <img class="mr05" src="../assets/file.png" alt="">
                                    <h7>Đính kèm file</h7>
                                </div>
                                <div>
                                    <h7>còn lại 12334 kí tự</h7>
                                </div>
                            </div>
                        </div>
                        <div class="mt05">
                            <button @click="handleNote" class="border-radius bg-blue-1 pt05 pb05 pr1 pl1 white mr1">Lưu lại</button>
                            <button class="border-radius pt05 pb05 pr1 pl1 mr1" style="border: 1px solid #C7C9D9">Làm lại</button>
                        </div>
                    </div>
                    <div class="history--note">
                        <div class="history--note__title pt1">
                            <h5 class="blue-1">Lịch sử ghi chú ({{dataNote.length}})</h5>
                        </div>
                        <div class="history--note__body f pt05" style="overflow-y: scroll; height: 330px;">
                                <div class="bg-blue-1 ml05" style="width: 1px; height: 100%;"></div>
                                <div class="w100" style="margin-left: -6px">
                                    <div v-for="item in dataNote" :key="item" class="f w100 pr05 mb05" style="background-color: transparent;">
                                        <div class="mr05" style="background-color: transparent;">
                                            <img src="../assets/Ellipse.png" alt="">
                                        </div>
                                        <div class="w100">
                                            <h6 class="mb05">{{item.timeNote}}</h6>
                                            <h7 class="text--note gray">{{item.textNote}}</h7>
                                            <div class="f jcb aic mt05 w100">
                                                <button class="border-radius pt05 pb05 pr1 pl1 mr1" style="border: 1px solid #C7C9D9">Xem chi tiết</button>
                                                <div class="f aic">
                                                    <img src="../assets/file.png" alt="">
                                                    <h6 class="ml05">5 files đính kèm</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <back-home-btn></back-home-btn>
      <FooterHRM></FooterHRM>
  </div>
</template>

<script>
import PerHeader from "@/components/PerHeader.vue";
import FooterHRM from "@/components/FooterHRM.vue";
import BackHomeBtn from "@/components/BackHomeBtn.vue";
export default {
    el: '#PerDetail',
    components: {
        PerHeader,
        FooterHRM,
        BackHomeBtn
    },
    data() {
        return {
            NavItem: [
                {
                    img: "../assets/info.png",
                    text: "Thông tin cá nhân"
                },
                {
                    img: "../assets/contact.png",
                    text: "Thông tin liên hệ"
                },
                {
                    img: "../assets/application.png",
                    text: "Hồ sơ đã tiếp nhận"
                },
                {
                    img: "../assets/file.png",
                    text: "File đính kèm"
                },
            ],
            infoBasic: [
                {
                    header: "Thông tin cơ bản",
                    title: [
                        {
                            h1: "Họ và tên",
                            h2: "Lê Bá Hoàng Long",
                        },
                        {
                            h1: "Ngày sinh",
                            h2: "25/02/2001",
                        },
                        {
                            h1: "Giới tính",
                            h2: "Nam ",
                        },
                        {
                            h1: "Nơi sinh",
                            h2: "25/02/2001",
                        },
                        {
                            h1: "Nguyên quán",
                            h2: "25/02/2001",
                        },
                        {
                            h1: "CMT/CCCD/Hộ chiếu ",
                            h2: "Nam ",
                        },
                        {
                            h1: "Ngày cấp",
                            h2: "25/02/2001",
                        },
                        {
                            h1: "Nơi cấp",
                            h2: "25/02/2001",
                        },
                        {
                            h1: "Quốc tịch",
                            h2: "Nam ",
                        },
                        {
                            h1: "Dân tộc",
                            h2: "25/02/2001",
                        },
                        {
                            h1: "Tôn giáo",
                            h2: "25/02/2001",
                        },
                        {
                            h1: "Tình trạng hôn nhân",
                            h2: "Nam ",
                        },
                    ]
                
                },
                {
                    header: "Thông tin chấm công",
                    title: [
                        {
                            h1: "Mã nhân sự",
                            h2: "Lê Bá Hoàng Long",
                        },
                        {
                            h1: "Mã chấm công",
                            h2: "25/02/2001",
                        },
                        {
                            h1: "Ngày nghỉ việc",
                            h2: "",
                        },  
                    ]  
                },
                {
                    header: "Thông tin thanh toán",
                    title: [
                        {
                            h1: "Số tài khoản",
                            h2: "Lê Bá Hoàng Long",
                        },
                        {
                            h1: "Ngân hàng",
                            h2: "25/02/2001",
                        },
                        {
                            h1: "Mã số thuế cá nhân",
                            h2: "Nam ",
                        },
                    ]
                },
            ],
            dataNote: [],
        }
    },
    methods: {
        handleNote() {
            var text = document.getElementsByClassName('note--input')[0].value;
            var d = new Date();
            var note = {
                textNote: text,
                timeNote: d.getHours() + ":" + d.getMinutes() + " - " + d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear(),
            }
            this.dataNote.push(note);
            console.log(document.getElementsByClassName('note--input')[0])
            document.getElementsByClassName('note--input')[0].innerHTML = ``;
        },
        handleCOInfo(event) {
            var button = event.target.parentElement.parentElement;
            event.target.classList.toggle('rotate');
            var text = button.getElementsByClassName('info__basic--detail')[0];
            text.classList.toggle('open-hide');
            console.log(text)
        }
    }
}
</script>

<style>
.text--note {
    display: -webkit-box;
    max-height: 4.8rem;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 3;
    line-height: 1.4rem;
};

.history--note__body {
    overflow-y: scroll;
    height: 330px;
    width: 100%;
    margin-right: 1em;
}

.content__info {
    overflow-y: scroll;
}

.content__info::-webkit-scrollbar {
    width: 4px;
    background-color: #f3f3f3;
}

.content__info::-webkit-scrollbar-thumb {
    width: 4px;
    background-color: #585CA2;
}

.info__basic {
    border-top: 1px solid #C7C9D9; 
    border-radius:0 0 8px 8px;
}

.history--note__body::-webkit-scrollbar {
    width: 2px;
    background-color: #F5F5F5;
}

.history--note__body::-webkit-scrollbar-thumb{
    width: 2px;
    background-color: #585CA2;
}

.info__basic--detail {
    transition: 0.2s;
}

.info__basic--detail {
    display: none;
}

.open-info:hover {
    background-color: #585CA2;
}

.open-info {
    transition: 00.1s;
}

.open-hide {
    display: flex;

}

.rotate {
    transform: rotate(0) !important;
}
</style>