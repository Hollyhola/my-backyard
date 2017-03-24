<template>
 <div>
   {{msg}}
 </div>
</template>

<script>
export default {
  name: 'yyh',
  data() {
    return {
      msg: "you"
    }
  },

  methods: {
    yell() {
      this.msg = this.msg + "!"
    }
  },

 
}
</script>