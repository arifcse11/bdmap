<script>





  $(document).ready(function() {




     $('#map g').hover(function(){


   //   $('path').click(function(){
          var x = event.clientX;
          var y = event.clientY;
          var coor = "X coords: " + x + ", Y coords: " + y;

          var total_candidate = $(this).attr("data-total-candidate");

          var al_candidate = $(this).attr("data-al-candidate");
          var bnp_candidate = $(this).attr("data-bnp-candidate");

          var info = "<div><p>Total candidate: "+ total_candidate +"</p> <p>AL: "+al_candidate+"</p> <p>BNP: "+bnp_candidate+"</p></div>";





         //$('path').removeClass('selected');
         var district = $(this).attr('id');
         //$(this).addClass('active');
        // alert(coor);

         $("#showinfo").css({"left": x, top: y }).show().
         html('<h3>' + district + '</h3>'+ info);
       } ,
           function(){
               $("#showinfo").hide();
           }
           );
  // Handler for .ready() called.
    //$('[data-toggle="popover"]').popover();




});


</script>




<!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="1300px" height="800px" viewBox="0 0 3685.04 3061.42" enable-background="new 0 0 3685.04 3061.42"
   xml:space="preserve">

   <g id="map">

    <g id="khagrachori" data-total-candidate="5" data-al-candidate="Badaruddin Ahmed Kamran" data-bnp-candidate="Ariful Haque Chowdhury">
      <polygon  points="2297,1522.42 2344,1598.42 2339,1743.42 2288,1825.42 2229,1723.42  "/>
    </g>
    <g id="feni" data-total-candidate="4" data-al-candidate="Mr I" data-bnp-candidate="Mr J">
      <polyline  points="2178,1729.42 2178,1766.42 2141,1798.42 2118,1763.92 2098,1717.42 2133,1707.42 2138,1657.42
        2171,1716.42  "/>
    </g>
    <g id="chittagong" data-total-candidate="3" data-al-candidate="Mr A" data-bnp-candidate="Mr B">
      <polygon  points="2219,1742.42 2245,1798.42 2288,1825.42 2296,1875.42 2316,1847.42 2344,1925.42 2359,2026.42
        2344,2053.42 2274,2076.42 2246,1972.42 2190,1849.42 2153,1804.42 2178,1766.42   "/>
    </g>
    <g id="chittagong_s1" data-total-candidate="6" data-al-candidate="Mr C" data-bnp-candidate="Mr D">
      <polygon fill="#CE4949" points="2219,1742.42 2178,1766.42 2148.128,1792.255 2208.724,1890.546 2245,1798.42  "/>
    </g>
    <g id="chittagong_s2" data-total-candidate="2" data-al-candidate="Mr E" data-bnp-candidate="Mr F">
      <polyline fill="#53AFBC" points="2245,1798.42 2208.724,1890.546 2245,1964.42 2354.635,1997.029 2316,1847.42 2286.5,1862.42
        2286.5,1822.827   "/>
    </g>
    <g id="chittagong_s3" data-total-candidate="3" data-al-candidate="Mr G" data-bnp-candidate="Mr H">
      <polygon fill="#4C6013" points="2246,1972.42 2351,1997.029 2359,2026.42 2359,2054.42 2272.88,2072.26  "/>
    </g>

</g>
</svg>
<div id="showinfo" style="position:fixed; top: 0; left: 0; height:auto; width:300px; background: red;" ></div> -->