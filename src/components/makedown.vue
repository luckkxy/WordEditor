<template>
    <div class="mdContainer">
        <div class="navContainer">
            <div class="markContainer">
              <form>
                <ul class="markListGroup">
                    <li class="markListItem" @click="addStrong" title="strong">
                      <svg t="1580711106090" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1087" width="20" height="20"><path d="M694.021847 492.679245a208.460775 208.460775 0 0 1 112.873883 74.740815 197.275074 197.275074 0 0 1 37.624627 118.975173 234.899702 234.899702 0 0 1-34.065541 123.551142A203.376365 203.376365 0 0 1 711.817279 892.313803a440.309831 440.309831 0 0 1-168.802383 26.438928h-254.220457a50.844091 50.844091 0 0 1-50.844091-50.844091V168.802383a50.844091 50.844091 0 0 1 50.844091-50.844091h249.644489q145.922542 0 203.376365 63.555114a203.376365 203.376365 0 0 1 59.996028 140.838133 180.496524 180.496524 0 0 1-27.45581 97.112215 206.935452 206.935452 0 0 1-80.333664 73.215491z m-323.368421-39.14995h147.956306A563.860973 563.860973 0 0 0 610.129096 447.428004a122.53426 122.53426 0 0 0 64.063555-31.523337 101.688183 101.688183 0 0 0 27.964251-79.825223A111.34856 111.34856 0 0 0 672.667329 254.220457a121.008937 121.008937 0 0 0-67.114201-33.04866 681.310824 681.310824 0 0 0-101.688183-6.101291H370.653426a25.422046 25.422046 0 0 0-25.422046 25.422046v187.614697a25.422046 25.422046 0 0 0 25.422046 25.422046z m0 370.144985h173.886792a227.781529 227.781529 0 0 0 148.464747-36.607746 127.618669 127.618669 0 0 0 41.692155-101.688182 124.059583 124.059583 0 0 0-44.234359-101.688183 259.304866 259.304866 0 0 0-159.650447-36.099305H370.653426a25.422046 25.422046 0 0 0-25.422046 25.422046v225.239324a25.422046 25.422046 0 0 0 25.422046 25.422046z" fill="#666666" p-id="1088"></path></svg>
                    </li>
                    <li class="markListItem" @click="addItalic" title="italic">
                      <svg t="1580711179047" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1409" width="20" height="20"><path d="M897.948071 61.745273l0 64.321958L769.298885 126.06723 447.675918 897.933793l128.649186 0 0 64.320934-450.273176 0 0-64.320934 128.65021 0 321.622966-771.865539L447.675918 126.068254 447.675918 61.745273 897.948071 61.745273z" p-id="1410"></path></svg>
                    </li>
                    <li class="markListItem" @click="addHTitle(1)" title="H1-title">
                      <svg t="1580711232060" class="icon" viewBox="0 0 1047 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2466" width="20" height="20"><path d="M472.296727 930.909091v-372.363636H116.363636v372.363636h-93.090909V93.090909h93.090909v372.363636h355.886546V93.090909h93.090909v837.818182z" p-id="2467"></path><path d="M874.170182 930.955636v-0.418909h-120.413091v-69.818182h120.413091v-364.171636a283.927273 283.927273 0 0 1-120.413091 67.072V483.141818a301.335273 301.335273 0 0 0 74.146909-31.278545 304.500364 304.500364 0 0 0 66.187636-52.922182h60.183273v461.730909h93.090909v69.818182h-93.090909V930.909091z" p-id="2468"></path></svg>
                    </li>
                    <li class="markListItem" @click="addHTitle(2)" title="H2-title">
                      <svg t="1580711319786" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3308" width="20" height="20"><path d="M662.667636 930.909091a203.776 203.776 0 0 1 52.130909-139.310546 667.787636 667.787636 0 0 1 118.225455-96.954181 547.467636 547.467636 0 0 0 74.891636-61.021091 130.653091 130.653091 0 0 0 35.979637-87.179637 86.946909 86.946909 0 0 0-24.250182-67.025454 102.4 102.4 0 0 0-71.214546-22.341818 86.853818 86.853818 0 0 0-74.938181 34.257454 163.607273 163.607273 0 0 0-27.927273 97.745455h-80.058182a206.196364 206.196364 0 0 1 50.688-143.034182 170.402909 170.402909 0 0 1 134.981818-57.344 176.267636 176.267636 0 0 1 124.136728 43.938909 150.807273 150.807273 0 0 1 47.662545 114.734545 185.530182 185.530182 0 0 1-51.2 125.952 740.864 740.864 0 0 1-108.683636 85.690182 258.513455 258.513455 0 0 0-101.329455 100.538182H1024V930.909091z m-216.482909 0v-372.363636H93.090909v372.363636H0V93.090909h93.090909v372.363636h353.047273V93.090909h93.090909v837.818182z" p-id="3309"></path></svg>
                    </li>
                    <li class="markListItem" @click="addHTitle(3)" title="H3-title">
                      <svg t="1580711360680" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4110" width="20" height="20"><path d="M707.490909 894.417455a188.509091 188.509091 0 0 1-61.719273-136.331637h80.802909a110.033455 110.033455 0 0 0 34.490182 82.711273 105.006545 105.006545 0 0 0 74.845091 26.810182 114.641455 114.641455 0 0 0 81.547637-29.789091 90.670545 90.670545 0 0 0 27.22909-66.327273 82.199273 82.199273 0 0 0-28.672-69.259636 119.202909 119.202909 0 0 0-78.568727-22.434909h-38.167273v-61.067637h37.515637a107.799273 107.799273 0 0 0 72.657454-21.643636 78.382545 78.382545 0 0 0 24.994909-61.812364 80.709818 80.709818 0 0 0-22.807272-61.067636 102.4 102.4 0 0 0-71.261091-21.643636 104.866909 104.866909 0 0 0-74.146909 24.66909 110.312727 110.312727 0 0 0-31.604364 73.681455h-78.568727a174.638545 174.638545 0 0 1 58.042182-123.671273 177.524364 177.524364 0 0 1 125.672727-43.938909 194.699636 194.699636 0 0 1 127.022545 38.772364 133.352727 133.352727 0 0 1 47.010909 107.054545 115.246545 115.246545 0 0 1-86.667636 117.015273 146.338909 146.338909 0 0 1 70.516364 43.892364 113.943273 113.943273 0 0 1 26.391272 77.544727 158.999273 158.999273 0 0 1-49.943272 120.645818 200.471273 200.471273 0 0 1-137.309091 47.662546 193.117091 193.117091 0 0 1-129.303273-41.472z m-261.306182 41.890909v-382.976H93.090909v372.363636H0v-837.818182h93.090909v372.363637h353.093818V98.304h93.090909v837.818182z" p-id="4111"></path></svg>
                    </li>
                    <li class="markListItem" @click="addHTitle(4)" title="H4-title">
                      <svg t="1580711395288" class="icon" viewBox="0 0 1070 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4885" width="20" height="20"><path d="M891.578182 930.909091v-115.432727h-255.581091v-76.8l258.513454-339.781819h73.448728v351.697455h79.127272v64.837818h-79.127272v115.432727z m-190.231273-180.270546h190.231273V501.76h-2.187637zM472.296727 930.909091v-372.363636H116.363636v372.363636h-93.090909V93.090909h93.090909v372.363636h355.933091V93.090909h93.090909v837.818182z" p-id="4886"></path></svg>
                    </li>
                    <li class="markListItem" @click="addAlign('left')" title="左">
                      <svg t="1580711478202" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5386" width="20" height="20"><path d="M672 160h-512a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64zM672 672h-512a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64zM864 928h-704a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64zM864 416h-704a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64z" p-id="5387"></path></svg>
                    </li>
                    <li class="markListItem" @click="addAlign('center')" title="居中">
                      <svg t="1580711527718" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5807" width="20" height="20"><path d="M294.4 399.36c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h460.8c15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6h-460.8z m-102.4-153.6h665.6c15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6h-665.6c-15.36 0-25.6 10.24-25.6 25.6 0 12.8 10.24 25.6 25.6 25.6z m665.6 358.4h-665.6c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h665.6c15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6z m-153.6 204.8h-358.4c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6h358.4c15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6z" p-id="5808"></path></svg>
                    </li>
                     <li class="markListItem" @click="addAlign('right')" title="右">
                       <svg t="1580711565082" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6329" width="20" height="20"><path d="M162.304 186.88H865.28v63.488H162.304zM330.752 376.832H865.28V440.32H330.752zM162.304 567.296H865.28v63.488H162.304zM330.752 757.248H865.28v63.488H330.752z" fill="#000000" p-id="6330"></path></svg>
                     </li>
                    <li class="markListItem" title="字号">字号
                      <select v-model="fontsize"   @change="addFont">
                      <option value="12px">12px</option>
                      <option value="14px">14px</option>
                      <option value="16px">16px</option>
                      <option value="20px">20px</option>
                      <option value="25px">25px</option>
                      <option value="30px">30px</option>
                      </select></li>
                    <li class="markListItem" @click="opendiv('link')" >
                      <svg t="1580711651488" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7132" width="20" height="20"><path d="M912.9 403.9L749.6 567.2l-35.4-35.4 163.3-163.3c9.4-9.4 14.5-21.9 14.5-35.4 0-13.4-5.2-26-14.5-35.4L726.2 146.5c-9.4-9.4-21.9-14.5-35.4-14.5-13.4 0-26 5.2-35.4 14.5l-246 246.1c-9.4 9.4-14.5 21.9-14.5 35.4 0 13.4 5.2 26 14.5 35.4l51.7 51.7-35.4 35.4-51.7-51.7c-38.9-38.9-38.9-102.5 0-141.4l246.1-246.1c38.9-38.9 102.5-38.9 141.4 0l151.3 151.3c39 38.7 39 102.4 0.1 141.3z m-263 121.5l-91.5-91.5-35.4 35.4 91.5 91.5c9.4 9.4 14.5 21.9 14.5 35.4 0 13.4-5.2 26-14.5 35.4l-246 245.9c-9.4 9.4-21.9 14.5-35.4 14.5-13.4 0-26-5.2-35.4-14.5L146.5 726.2c-9.4-9.4-14.5-21.9-14.5-35.4 0-13.4 5.2-26 14.5-35.4L304 498l-35.4-35.4-157.5 157.5c-38.9 38.9-38.9 102.5 0 141.4l151.3 151.3c38.9 38.9 102.5 38.9 141.4 0l246.1-246.1c38.9-38.8 38.9-102.4 0-141.3z" fill="" p-id="7133"></path></svg>
                    </li><li  v-show="dislink"><div><inputCtrol  tranvalue="link" @getv="addLink"></inputCtrol></div></li>
                    <li class="markListItem" @click="opendiv('img')" >
                      <svg t="1580711953838" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8130" width="20" height="20"><path d="M847.084 900.015H175.528c-61.713 0-111.926-50.234-111.926-111.927V206.072c0-61.734 50.214-111.926 111.926-111.926h671.557c61.713 0 111.927 50.192 111.927 111.926v582.016c-0.001 61.692-50.215 111.927-111.928 111.927z m67.156-693.943c0-37.032-30.124-67.156-67.156-67.156H175.528c-37.031 0-67.155 30.124-67.155 67.156v582.016c0 37.032 30.124 67.156 67.155 67.156h671.557c37.032 0 67.156-30.124 67.156-67.156V206.072z m-89.541 582.016H197.912c-12.352 0-22.385-10.012-22.385-22.384v-44.772a22.457 22.457 0 0 1 5.115-14.252c10.143-12.285 101.499-120.058 186.559-120.058 43.962 0 72.271 17.576 99.662 34.626 25.773 16.046 50.126 32.53 89.979 32.53h0.043c29.271 0 45.995-24.354 73.212-67.418 34.321-54.346 81.32-128.804 189.159-155.78 6.689-1.704 13.794-0.174 19.217 4.066a22.442 22.442 0 0 1 8.612 17.664v313.394c-0.001 12.372-10.035 22.384-22.386 22.384z m-22.386-305.392c-70.893 27.021-104.428 80.099-134.377 127.578-28.682 45.426-55.767 88.318-109.324 88.318l-3.303-0.088c-51.81-1.748-83.835-21.687-112.101-39.219-24.046-14.996-44.836-27.894-76.009-27.894-51.001 0-118.943 65.712-146.903 97.76v14.166h582.016l0.001-260.621z m-402.934 14.385c-49.384 0-89.541-40.181-89.541-89.54 0-49.406 40.158-89.542 89.541-89.542s89.541 40.136 89.541 89.542c0 49.358-40.157 89.54-89.541 89.54z m0-134.31c-24.681 0-44.771 20.068-44.771 44.771 0 24.658 20.09 44.771 44.771 44.771 24.682 0 44.771-20.112 44.771-44.771 0-24.704-20.089-44.771-44.771-44.771z" fill="" p-id="8131"></path></svg>
                    </li><li  v-show="disimg"><div><inputCtrol  tranvalue="img" @getv="addImage"></inputCtrol></div></li>
                    <li class="markListItem" @click="addTable" title="table"><i></i></li>
                    <slot></slot>
                </ul>
              </form>
            </div>
        </div>
        <div style="display:none" id="temp"></div>
        <div class="mdBodyContainer">
            <div class="editContainer">
                <div @blur="getData" v-bind:style="{width:width,height:height}" contentEditable="true" id="editor" class="mdEditor"  @mouseup="getText"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Handle from '../assets/js/handle'
import inputCtrol from './inputCtrol'
export default {
  name: 'markdown',
  props: ['width', 'height'],
  data () {
    return {
      inputxx: '',
      getHtml: '',
      fontsize: '1',
      dislink: false,
      disimg: false
    }
  },
  components: {inputCtrol},
  methods: {
    addImage (src, flag) {
      Handle.createEle(this.getHtml, 'imgxx', 'img', src)
      if (flag === 'img') {
        this.disimg = false
      }
    },
    getData () {
      this.inputxx = document.getElementById('editor').innerHTML
      this.$emit('getData', this.inputxx, this.getHtml)
    },
    getText () {
      this.getHtml = Handle.getSeltion()
    },
    addStrikethrough () {},
    addStrong () {
      if (Handle.getBI(this.getHtml, 'b', 'bold') && this.getHtml.toString() !== '') {
        Handle.createEle(this.getHtml, 'boldxx', 'b', 'bold')
      }
    },
    addItalic () {
      if (Handle.getBI(this.getHtml, 'i', 'italic') && this.getHtml.toString() !== '') {
        Handle.createEle(this.getHtml, 'italicxx', 'i', 'italic')
      }
    },
    addLink (src, flag) {
      if (this.getHtml.toString() !== '') {
        Handle.createEle(this.getHtml, 'axx', 'a', src)
      }
      if (flag === 'link') {
        this.dislink = false
      }
    },
    addFont () {
      if (Handle.getBI(this.getHtml, 'font', this.fontsize) && this.getHtml.toString() !== '') {
        Handle.createEle(this.getHtml, 'fontxx', 'font', this.fontsize)
      }
    },
    opendiv (flag) {
      if (flag === 'link') {
        this.disimg = false
        this.dislink = !this.dislink
      } else {
        this.disimg = !this.disimg
        this.dislink = false
      }
    },
    addAlign (align) {
      Handle.addAlign(this.getHtml, align)
    },
    addTable () {},
    addHTitle (level) {
      if (document.getElementById('editor').innerText !== '') {
        switch (level) {
          case 1:
            Handle.createEle(this.getHtml, 'h1x', 'h1', 0)
            break
          case 2:
            Handle.createEle(this.getHtml, 'h2x', 'h2', 0)
            break
          case 3:
            Handle.createEle(this.getHtml, 'h3x', 'h3', 0)
            break
          default:
            Handle.createEle(this.getHtml, 'h4x', 'h4', 0)
        }
      }
    },
    testData () {
      if (this.getHtml.startContainer.parentNode.id === '') {
        this.getHtml.startContainer.parentNode.setAttribute('id', 'divxx' + Handle.getNum())
      }
      return this.getHtml.startContainer.parentNode.id
    }
  }
}
</script>
<style scoped>
.markListGroup li{float:left;margin:10px}
li{list-style: none;}
.editContainer{clear: both;text-align: left;margin-left: 10px;}
.editContainer div{min-height: 100px;border:1px solid gray;height:150px;overflow-y: auto}
div,h1,h2,h3,h4,b,font,i{margin: 0;padding: 0;}
</style>>
