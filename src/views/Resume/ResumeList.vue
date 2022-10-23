<template>
  <div v-if="finalList.length">
    <template v-if="level == 4">
      <el-row v-if="editing">
        <el-col :span="22">
          <el-input
            :modelValue="modelValue"
            @input="handleTitleInput"
          ></el-input>
        </el-col>
        <el-col :span="2">
          <el-row align="middle" style="height: 100%;">
            <AddAndDeleteOperation
              @add="$emit('addProject')"
              @delete="$emit('deleteProject')"
            />
          </el-row>
        </el-col>
      </el-row>
      <h4 class="project-title" v-else>{{ title }}</h4>
    </template>
    <h2 class="block-title" v-else>{{ title }}</h2>
    <ul :class="editing ? 'editing' : ''">
      <li v-for="(item, index) of finalList" :key="index">
        <el-row v-if="editing">
          <el-col :span="22">
            <el-input :modelValue="item" @input="handleInput(index, $event)" />
          </el-col>
          <el-col :span="2">
            <el-row align="middle" style="height: 100%;">
              <AddAndDeleteOperation
                @add="handleAdd(index)"
                @delete="handleDelete(index)"
              />
            </el-row>
          </el-col>
        </el-row>
        <span v-else>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import AddAndDeleteOperation from './AddAndDeleteOperation.vue'

export default {
  props: ['list', 'title', 'level', 'editing', 'modelValue'],
  emits: ['addProject', 'deleteProject', 'update:modelValue'],
  components: {
    AddAndDeleteOperation,
  },
  computed: {
    finalList() {
      if (this.innerList.length) {
        return this.innerList
      }
      if (this.editing) {
        return ['']
      }
      return []
    },
  },
  data() {
    return {
      innerList: this.list,
    }
  },
  methods: {
    handleTitleInput(value) {
      this.$emit('update:modelValue', value)
    },
    handleInput(index, event) {
      this.innerList[index] = event
    },
    handleAdd(index) {
      this.innerList.splice(index + 1, 0, '')
    },
    handleDelete(index) {
      this.innerList.splice(index, 1)
    }
  }
}
</script>

<style scoped>
h1,
h2,
h3,
h4 {
  color: #409eff;
}

h2 {
  margin: 20px 0;
}
h3 {
  margin: 18px 0;
}

h4 {
  margin: 21px 0;
}

ul {
  margin: 16px 0;
  padding-left: 40px;
}
ul.editing li {
  margin-bottom: 8px;
}
</style>