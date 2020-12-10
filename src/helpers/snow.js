export const globe = () => {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var animation;
    var speed = 15;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var color = {
      sky1: 'rgba(84,34,121,1)',
      sky2: 'rgba(1,6,22,1)',
      hill1: '#101758',
      hill2: '#ffffff',
      tree1: '#b8e382',
      tree2: '#122403',
      snow1: '#ffffff',
      snow2: '#d1ecff',
      snow3: '#a0d4ff'
    }
    var sparkles = [];
    var trees = [];
  
    init();
  
    function randomDirection() {
      return Math.ceil(Math.random()*3) - 2;
    }
  
    function createContainer() {
      canvas.width = width;
      canvas.height = height;
      canvas.style.background = color.sky1;
      canvas.style.background = 'linear-gradient(0deg, ' + color.sky1 + ' 0%, ' + color.sky2 + ' 80%)';
      document.body.style.margin = 0;
      document.body.style.padding = 0;
      document.body.appendChild(canvas);
    }
  
    function createSparkles(size, speed, color, spacing) {
      var s = [];
      for (var x = spacing/2; x < width; x += spacing) {
        for (var y = spacing/2; y < height; y += spacing) {
          s.push(sparkle(size, speed, color, x + Math.ceil(Math.random() * spacing), y + Math.ceil(Math.random() * spacing)));
        }
      }
      return s;
    }
  
    function drawSparkles(){
      sparkles.forEach(function(sparkleGroup) {
        sparkleGroup.forEach(function (sparkle) {
          sparkle.moveSparkle()
        })
      })
    }
  
    function drawHill() {
      var grd = ctx.createLinearGradient(0, canvas.height - canvas.height / 2.5,0, canvas.height);
      grd.addColorStop(0, color.hill1);
      grd.addColorStop(1, color.hill2);
  
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - canvas.height / 3);
      ctx.bezierCurveTo(canvas.width / 3, canvas.height - canvas.height / 2.5,
        canvas.width - canvas.width / 3, canvas.height - canvas.height / 2.5,
        canvas.width, canvas.height - canvas.height / 3)
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      //ctx.ellipse(scaled.x + scaled.width / 2, scaled.y + scaled.height / 2, scaled.width, scaled.height,  Math.PI, 2 * Math.PI , false);
      ctx.fillStyle = grd;
      ctx.fill();
    }
  
    function drawTreeCone(x, y, size){
      var sizeH = Math.sqrt(Math.pow(size, 2) - Math.pow(size/2, 2));
      //var grd = ctx.createLinearGradient(x , y - sizeH, x, y);
      var grd = ctx.createRadialGradient(x, y - sizeH, 0, x, y - sizeH, sizeH);
      grd.addColorStop(0, color.tree1);
      grd.addColorStop(1, color.tree2);
  
      ctx.beginPath();
      ctx.moveTo(x - size / 2, y);
      ctx.bezierCurveTo( x - size / 3, y + size / 6, 	// First curve point.
        x + size / 3, y + size / 6, 	// Second curve point.
        x + size/2, y // end point
      );
      ctx.lineTo(x, y - sizeH);
  
      ctx.closePath();
      ctx.fillStyle = grd;
      ctx.fill();
    }
  
    function drawTree(x, y, size) {
      for (var i = 1; i <= 6; i++) {
        var newSize = size - (size / 8 * i)
        var newY = y - (size / 5 * i);
        drawTreeCone(x,  newY, newSize);
      }
    }
  
    function createTrees() {
      trees = [];
      var treeCount = 20;
      var bulbCount = 12;
      for (var i = treeCount; i > 0; i--) {
        var x = (Math.random() * width);
        var y = height - (height / 3) + ((20 - i) * 16) ;
        var size = 60 + ((20 - i) * 12);
        var bulbs = [];
        for (var b = 0; b < bulbCount; b++){
          var bulbX = x;
          var bulbY = y - (size/9) - (b * (size/9));
          var bulbColor = 'rgb(' + (Math.ceil(Math.random() * 127) + 127) + ',' + (Math.ceil(Math.random() * 127) + 127) + ',' + (Math.ceil(Math.random() * 127) + 127) + ')';
          //bulbs.push({x:bulbX, y:bulbY, color:bulbColor, size:size / 40});
        }
        trees.push({x: x, y: y, size: size > 20 ? size : 20, bulbs: bulbs});
      }
      console.log(trees);
    }
  
  
  
    function drawTrees() {
      trees.forEach(function(tree){
        drawTree(tree.x, tree.y, tree.size);
        tree.bulbs.forEach(function(bulb){
          drawBulb(bulb.x, bulb.y, bulb.color, bulb.size);
        })
      });
    }
  
    function drawBulb(x, y, color, size) {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI, false);
      ctx.fillStyle = color;
      ctx.fill();
    }
  
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawHill();
      drawTrees();
      drawSparkles();
    }
  
    function createSparkleSets() {
      sparkles=[];
      sparkles.push(createSparkles(3, 6, color.snow1, 100));
      sparkles.push(createSparkles(2, 4, color.snow2, 50));
      sparkles.push(createSparkles(1, 3, color.snow3, 25));
    }
  
    function sparkle(size, speed, color, x, y) {
      function moveSparkle() {
        x += randomDirection();
        y += randomDirection() + speed;
  
        if (y > height) y = 0;
  
        drawCircle(x, y);
      }
  
      function drawCircle(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
      }
  
      return {
        moveSparkle: moveSparkle
      }
    }
  
    function initAnimation() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createSparkleSets();
      createTrees();
      restartAnimation();
    }
  
    function toggleAnimation() {
      if (animation) {
        clearInterval(animation);
        animation = null;
      } else {
        animation = setInterval(draw, 1000/speed);
      }
    }
  
    function restartAnimation() {
      if (animation) {
        clearInterval(animation);
        animation = null;
      }
      console.log(speed);
      animation = setInterval(draw, 1000/speed);
    }
  
    function init() {
      createContainer();
      initAnimation();
      document.addEventListener('keydown', function(e){
        switch(e.code){
          case 'Space':
            toggleAnimation();
            break;
          case 'KeyF':
            speed++;
            restartAnimation();
            break;
          case 'KeyS':
            speed--;
            restartAnimation();
            break;
        }
      });
      window.addEventListener('resize', initAnimation);
    }
  
  }
//   document.addEventListener('DOMContentLoaded', globe);
  