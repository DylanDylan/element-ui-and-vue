 <template>
 <div>
    <el-row>
  <el-col :span="18" :offset="3">
     <el-table
      :data="books"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="书名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
    </el-table>
  </el-col>
</el-row>
<button @click="get">点击我</button>
 </div>

   
  </template>

  <script>
    export default {
      data() {
        return {
            books: []
        }
      },
      methods:{
        get:function(){
          let data=[{id: 1,
                author: '曹雪芹',
                name: '红楼梦',
                price: 32.0
            }, {
                id: 2,
                author: '施耐庵',
                name: '水浒传',
                price: 30.0
            }, {id: '3',
                author: '罗贯中',
                name: '三国演义',
                price: 24.0
            }, {
                id: 4,
                author: '吴承恩',
                name: '西游记',
                price: 20.0
            }];
            this.books=data;
        this.axios.get('https://api.github.com/users/DylanDylan').then((response) => {
  console.log(response.data)
        })
      }
     }
    }
  </script>