<template>
  <a-row>
    <a-col :span="12">
      <div class="form">
        <a-textarea :rows="6" placeholder="输入分析目标" :maxlength="100" show-count/>
        <br>
        <a-select
            ref="select"
            v-model:value="formData.type"
            style="width: 120px"
        >
          <a-select-option value="柱状图">柱状图</a-select-option>
          <a-select-option value="线性图">线性图</a-select-option>
          <a-select-option value="饼图">饼图</a-select-option>
        </a-select>
        <br>
        <br>
        <a-upload :file-list="fileList" :before-upload="beforeUpload" @remove="handleRemove" max-count="1" :custom-request="handleUpload">
          <a-button>
            <upload-outlined></upload-outlined>
            选择cvs文件
          </a-button>
        </a-upload>
        <a-button
            type="primary"
            :disabled="fileList.length === 0"
            :loading="uploading"
            style="margin-top: 16px"
            @click="handleUpload"
        >
          {{ uploading ? '分析中' : '分析' }}
        </a-button>
      </div>
    </a-col>
    <a-col :span="12">
      <div>
        fasdf
        fasdf
        asdfb
        <br>
        fasdfds
      </div>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import {reactive, ref} from 'vue';
import {UploadOutlined} from '@ant-design/icons-vue';
import type {UploadProps} from 'ant-design-vue';
import {ChartControllerService} from "../../../api";

const formData = reactive({
  file: null,
  goal: "",
  type: "选择图形",
})
/**
 * 文件列表
 */
const fileList = ref([]);
/**
 * 是否有选择文件
 */
const uploading = ref<boolean>(false);
/**
 * 移除文件逻辑
 * @param file
 */
const handleRemove: UploadProps['onRemove'] = file => {
  const index = fileList.value.indexOf(file);
  const newFileList = fileList.value.slice();
  newFileList.splice(index, 1);
  fileList.value = newFileList;
};
/**
 *
 * @param file
 */
const beforeUpload: UploadProps['beforeUpload'] = file => {
  fileList.value = [...(fileList.value || []), file];
  return false;
};

const handleUpload = async () => {
  fileList.value.forEach((file) => {
    formData.file = file;
  });
  uploading.value = true;
   var res=await ChartControllerService.analysisUsingPost(formData.file,formData.goal,formData.type);
   if (res===200){
     uploading.value=false;
   }
};
</script>


<style scoped>
.form {
  max-width: 500px;
}
</style>