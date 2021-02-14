<template>
 <div class="wrapper"  ref="aaa">
   <ul class="content">
    <li>食品类吧1</li>
    <li>食品类吧2</li>
    <li>食品类吧3</li>
    <li>食品类吧4</li>
    <li>食品类吧5</li>
    <li>食品类吧6</li>
    <li>食品类吧7</li>
    <li>食品类吧8</li>
    <li>食品类吧9</li>
    <li>食品类吧10</li>
    <li>食品类吧11</li>
    <li>食品类吧12</li>
    <li>食品类吧13</li>
    <li>食品类吧14</li>
    <li>食品类吧15</li>
    <li>食品类吧16</li>
    <li>食品类吧17</li>
    <li>食品类吧18</li>
    <li>食品类吧19</li>
    <li>食品类吧20</li>
    <li>食品类吧21</li>
    <li>食品类吧22</li>
    <li>食品类吧23</li>
    <li>食品类吧24</li>
    <li>食品类吧25</li>
    <li>食品类吧26</li>
    <li>食品类吧27</li>
    <li>食品类吧28</li>
    <li>食品类吧29</li>
    <li>食品类吧30</li>
    <li>食品类吧31</li>
    <li>食品类吧32</li>
    <li>食品类吧33</li>
    <li>食品类吧34</li>
    <li>食品类吧35</li>
    <li>食品类吧36</li>
    <li>食品类吧37</li>
    <li>食品类吧38</li>
    <li>食品类吧39</li>
    <li>食品类吧40</li>
    <li>食品类吧41</li>
    <li>食品类吧42</li>
    <li>食品类吧43</li>
    <li>食品类吧44</li>
    <li>食品类吧45</li>
    <li>食品类吧46</li>
    <li>食品类吧47</li>
    <li>食品类吧48</li>
    <li>食品类吧49</li>
    <li>食品类吧50</li>
    <li>食品类吧51</li>
    <li>食品类吧52</li>
    <li>食品类吧53</li>
    <li>食品类吧54</li>
    <li>食品类吧55</li>
    <li>食品类吧56</li>
    <li>食品类吧57</li>
    <li>食品类吧58</li>
    <li>食品类吧59</li>
    <li>食品类吧60</li>
    <li>食品类吧61</li>
    <li>食品类吧62</li>
    <li>食品类吧63</li>
    <li>食品类吧64</li>
    <li>食品类吧65</li>
    <li>食品类吧66</li>
    <li>食品类吧67</li>
    <li>食品类吧68</li>
    <li>食品类吧69</li>
    <li>食品类吧70</li>
    <li>食品类吧71</li>
    <li>食品类吧72</li>
    <li>食品类吧73</li>
    <li>食品类吧74</li>
    <li>食品类吧75</li>
    <li>食品类吧76</li>
    <li>食品类吧77</li>
    <li>食品类吧78</li>
    <li>食品类吧79</li>
    <li>食品类吧80</li>
    <li>食品类吧81</li>
    <li>食品类吧82</li>
    <li>食品类吧83</li>
    <li>食品类吧84</li>
    <li>食品类吧85</li>
    <li>食品类吧86</li>
    <li>食品类吧87</li>
    <li>食品类吧88</li>
    <li>食品类吧89</li>
    <li>食品类吧90</li>
    <li>食品类吧91</li>
    <li>食品类吧92</li>
    <li>食品类吧93</li>
    <li>食品类吧94</li>
    <li>食品类吧95</li>
    <li>食品类吧96</li>
    <li>食品类吧97</li>
    <li>食品类吧98</li>
    <li>食品类吧99</li>
    <li>食品类吧100</li>
    

  </ul>
 </div>
  
</template>

<script>
import BScroll from "better-scroll"



export default {
  name:"Category",
  data(){
    return {
      scroll:null
    }
  },
 
created(){
 
},
methods:{

},
mounted(){
 this.scroll = new BScroll(this.$refs.aaa,{
   click: true,
   probeType:3,
    pullUpLoad: true
   }),
   this.scroll.on('scroll',(position)=>{
    //  console.log(position);
   }),
   this.scroll.on('pullingUp', () => {
     console.log('已经到底啦');
  })
}
}
</script>

<style  scoped>
.wrapper {
  height: 300px;
   background:red;
   overflow: hidden;
}

</style>