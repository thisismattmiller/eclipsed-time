




var timestamp = Date.now();

var dt = new Date(timestamp);

var baseLayer = new Layer();
baseLayer.activate(); 

var backgroundRect = new Path.Rectangle({
    point: [0, 0],
    size: [view.size.width , view.size.height ],
    strokeColor: 'white',
    fillColor : 'grey'
});
backgroundRect.sendToBack();



var pole = new Path.Rectangle({
    position: view.center,
    width: view.size.width ,
    height: view.size.width,
    shadowColor: new Color(0, 0, 0),
    // Set the shadow blur radius to 12:
    shadowBlur: 10,
    // Offset the shadow by { x: 5, y: 5 }
    shadowOffset: new Point(0, 0)  
});

var ellHeight = view.size.width - (view.size.width*0.5)


var eclipseeX = view.size.width/2;
var eclipseeY = view.size.height/2
var eclipseeR = ((ellHeight / 2) - (ellHeight / 12))


var oneMinPx = (eclipseeR * 2) / (1440/2)

var isOdd = false;
if (dt.getDate() % 2 != 0) {
    isOdd = true
}
var dt = new Date(timestamp);
var ampm = dt.getHours() >= 12 ? 'pm' : 'am';
if (isOdd){
    if (ampm=='pm'){
        // going east to west, heading twoards midnight
        var base = (view.size.width/2) - (eclipseeR * 2)
        var currMin = 60 * (dt.getHours()-12) + dt.getMinutes()
        var currPos = base + (oneMinPx*currMin)
    }else{
        var base = (view.size.width/2)
        var currMin = 60 * dt.getHours() + dt.getMinutes()
        var currPos = base - (oneMinPx*currMin)
    }
}else{
    if (ampm=='pm'){
        // going east to west, heading twoards midnight
        var base = (view.size.width/2) + (eclipseeR * 2)
        var currMin = 60 * (dt.getHours()-12) + dt.getMinutes()
        var currPos = base - (oneMinPx*currMin)
    }else{
        var base = (view.size.width/2)
        var currMin = 60 * dt.getHours() + dt.getMinutes()
        var currPos = base + (oneMinPx*currMin)
    }
}

// var currPos = currMin * oneMinPx - (eclipseeR)
// currPos = noonL + currPos



var eclipsee1 = new Shape.Circle(new Point(eclipseeX,eclipseeY), eclipseeR);
eclipsee1.strokeColor = 'whitesmoke';
eclipsee1.fillColor = new Color(255, 255, 255, 0.75);
eclipsee1.shadowColor= new Color(255,255,255)
eclipsee1.shadowBlur= 100
eclipsee1.shadowOffset= new Point(0, 0) 


var eclipserX = currPos

var eclipserY = view.size.height/2
var eclipserR = ((ellHeight / 2) - (ellHeight / 12))


var eclipser = new Shape.Circle(new Point(eclipserX,eclipserY), eclipserR);
eclipser.strokeColor = 'black';
eclipser.fillColor = 'black';




var ellipse = new Path.Ellipse({
    point: view.center - [pole.width/2,ellHeight/2],
    size: [pole.width, ellHeight]
   
})



var postyle = { fillColor:'grey', strokeColor: 'black'}
var bloop = pole.subtract(ellipse)
bloop.style=postyle

var newLayer = new Layer();
newLayer.activate(); 




var eclipsee2 = new Shape.Circle(new Point(eclipseeX,eclipseeY), eclipseeR);
eclipsee2.strokeColor = new Color(255, 255, 255, 0.5);
eclipsee2.fillColor = new Color(255, 255, 255, 0.2);



var from = new Point(view.size.width/2, view.size.height/2-ellHeight/5);
var to = new Point(view.size.width/26, view.size.height/2-ellHeight/5);
var path2 = new Path.Line(from, to);
path2.strokeColor = 'grey';
path2.strokeWidth = view.size.width*0.01;
path2.shadowColor= new Color(0, 0, 0)
path2.shadowBlur= 2
path2.shadowOffset= new Point(0, 0)  

var from = new Point(view.size.width/2, view.size.height/2+ellHeight/7);
var to = new Point(view.size.width - (view.size.width/56), view.size.height/2+ellHeight/7);
var path3 = new Path.Line(from, to);
path3.strokeColor = 'grey';
path3.strokeWidth = view.size.width*0.01;
path3.shadowColor= new Color(0, 0, 0)
path3.shadowBlur= 2
path3.shadowOffset= new Point(0, 0)  


var from = new Point(view.size.width/2, view.size.height/2-ellHeight/2);
var to = new Point(view.size.width/2, view.size.height/2+ellHeight/2);
var path = new Path.Line(from, to);
path.strokeColor = 'grey';
path.strokeWidth = view.size.width*0.01;
path.shadowColor= new Color(0, 0, 0)
path.shadowBlur= 2
path.shadowOffset= new Point(0, 0)   

// the numeral lines
var nlSpacing = eclipserR / 6

from = new Point(view.size.width/2 - (nlSpacing*1), view.size.height/2-ellHeight/52);
to = new Point(view.size.width/2 - (nlSpacing*1), view.size.height/2+ellHeight/52);
var nlL57 = new Path.Line(from, to);
nlL57.strokeColor = 'black';


from = new Point(view.size.width/2 - (nlSpacing*2), view.size.height/2-ellHeight/62);
to = new Point(view.size.width/2 - (nlSpacing*2), view.size.height/2+ellHeight/12);
var nlL48 = new Path.Line(from, to);
nlL48.strokeColor = 'black';

from = new Point(view.size.width/2 - (nlSpacing*3), view.size.height/2-ellHeight/19);
to = new Point(view.size.width/2 - (nlSpacing*3), view.size.height/2+ellHeight/22);
var nlL39 = new Path.Line(from, to);
nlL39.strokeColor = 'black';

from = new Point(view.size.width/2 - (nlSpacing*4), view.size.height/2-ellHeight/52);
to = new Point(view.size.width/2 - (nlSpacing*4), view.size.height/2+ellHeight/52);
var nlL210 = new Path.Line(from, to);
nlL210.strokeColor = 'black';


from = new Point(view.size.width/2 - (nlSpacing*5), view.size.height/2-ellHeight/52);
to = new Point(view.size.width/2 - (nlSpacing*5), view.size.height/2+ellHeight/52);
var nlL111 = new Path.Line(from, to);
nlL111.strokeColor = 'black';




var totalSteps = 6*4
var internval = eclipseeR / (totalSteps)
// the left repeated 15 min marks
var stepLines = []
for (var step = 0; step < totalSteps; step++) {  
    var from = new Point(view.size.width/2 - (internval*step), view.size.height/2-ellHeight/102);
    var to = new Point(view.size.width/2 - (internval*step), view.size.height/2+ellHeight/102);
    stepLines.push(new Path.Line(from, to));
    stepLines[stepLines.length-1].strokeColor = 'black';
    stepLines[stepLines.length-1].opacity=0.35;
    if (step  % 4 == 0){
        stepLines[stepLines.length-1].opacity=0;
    }
}






var textJust = 'center'
var textFillColor = "black"
var textFontWeight = 'bold';
var textFontSize = view.size.width/90;
var textOpacity = 0.65


var nlL57Text5 = new PointText(new Point(view.size.width/2 - (nlSpacing*1), view.size.height/2-ellHeight/38));
nlL57Text5.justification = textJust
nlL57Text5.fillColor = textFillColor
nlL57Text5.content = '5';
nlL57Text5.fontWeight = textFontWeight
nlL57Text5.fontSize = textFontSize
nlL57Text5.opacity = textOpacity



var nlL57Text7 = new PointText(new Point(view.size.width/2 - (nlSpacing*1), view.size.height/2+ellHeight/22));
nlL57Text7.justification = textJust
nlL57Text7.fillColor = textFillColor
nlL57Text7.content = '7';
nlL57Text7.fontWeight = textFontWeight
nlL57Text7.fontSize = view.size.width/70;
nlL57Text7.rotation = 180;
nlL57Text7.fontSize = textFontSize
nlL57Text7.opacity = textOpacity


var nlL48Text4 = new PointText(new Point(view.size.width/2 - (nlSpacing*2), view.size.height/2-ellHeight/44));
nlL48Text4.justification = textJust
nlL48Text4.fillColor = textFillColor
nlL48Text4.content = '4';
nlL48Text4.fontSize = view.size.width/70;
nlL48Text4.fontWeight = 'bold';
nlL48Text4.fontSize = textFontSize
nlL48Text4.opacity = textOpacity


var nlL48Text8 = new PointText(new Point(view.size.width/2 - (nlSpacing*2), view.size.height/2+ellHeight/9));
nlL48Text8.justification = textJust
nlL48Text8.fillColor = textFillColor
nlL48Text8.content = '8';
nlL48Text8.fontWeight = textFontWeight
nlL48Text8.rotation = 180;
nlL48Text8.fontSize = view.size.width/70;
nlL48Text8.opacity = textOpacity
nlL48Text8.fontSize = textFontSize


var nlL39Text3 = new PointText(new Point(view.size.width/2 - (nlSpacing*3), view.size.height/2-ellHeight/17));
nlL39Text3.justification = textJust
nlL39Text3.fillColor = textFillColor
nlL39Text3.content = '3';
nlL39Text3.fontSize = view.size.width/70;
nlL39Text3.fontWeight = 'bold';
nlL39Text3.fontSize = textFontSize
nlL39Text3.opacity = textOpacity


var nlL39Text9 = new PointText(new Point(view.size.width/2 - (nlSpacing*3), view.size.height/2+ellHeight/15));
nlL39Text9.justification = textJust
nlL39Text9.fillColor = textFillColor
nlL39Text9.content = '9';
nlL39Text9.fontWeight = textFontWeight
nlL39Text9.rotation = 180;
nlL39Text9.fontSize = view.size.width/70;
nlL39Text9.opacity = textOpacity
nlL39Text9.fontSize = textFontSize


var nlL210Text2 = new PointText(new Point(view.size.width/2 - (nlSpacing*4), view.size.height/2-ellHeight/40));
nlL210Text2.justification = textJust
nlL210Text2.fillColor = textFillColor
nlL210Text2.content = '2';
nlL210Text2.fontSize = view.size.width/70;
nlL210Text2.fontWeight = 'bold';
nlL210Text2.fontSize = textFontSize
nlL210Text2.opacity = textOpacity


var nlL210Text10 = new PointText(new Point(view.size.width/2 - (nlSpacing*4), view.size.height/2+ellHeight/25));
nlL210Text10.justification = textJust
nlL210Text10.fillColor = textFillColor
nlL210Text10.content = '10';
nlL210Text10.fontWeight = textFontWeight
nlL210Text10.rotation = 180;
nlL210Text10.fontSize = view.size.width/70;
nlL210Text10.opacity = textOpacity
nlL210Text10.fontSize = textFontSize

var nlL111Text1 = new PointText(new Point(view.size.width/2 - (nlSpacing*5), view.size.height/2-ellHeight/40));
nlL111Text1.justification = textJust
nlL111Text1.fillColor = textFillColor
nlL111Text1.content = '1';
nlL111Text1.fontSize = view.size.width/70;
nlL111Text1.fontWeight = 'bold';
nlL111Text1.fontSize = textFontSize
nlL111Text1.opacity = textOpacity


var nlL111Text11 = new PointText(new Point(view.size.width/2 - (nlSpacing*5), view.size.height/2+ellHeight/25));
nlL111Text11.justification = textJust
nlL111Text11.fillColor = textFillColor
nlL111Text11.content = '11';
nlL111Text11.fontWeight = textFontWeight
nlL111Text11.rotation = 180;
nlL111Text11.fontSize = view.size.width/70;
nlL111Text11.opacity = textOpacity
nlL111Text11.fontSize = textFontSize


var nlL6Text6 = new PointText(new Point(view.size.width/2 - (nlSpacing*2), view.size.height/2-ellHeight/3.17));
nlL6Text6.justification = textJust
nlL6Text6.fillColor = textFillColor
nlL6Text6.content = '6';
nlL6Text6.fontWeight = textFontWeight
nlL6Text6.fontSize = view.size.width/70;
nlL6Text6.opacity = textOpacity
nlL6Text6.fontSize = textFontSize



// right side
from = new Point(view.size.width/2 + (nlSpacing*1), view.size.height/2-ellHeight/52);
to = new Point(view.size.width/2 + (nlSpacing*1), view.size.height/2+ellHeight/52);
var nlL75 = new Path.Line(from, to);
nlL75.strokeColor = 'black';


from = new Point(view.size.width/2 + (nlSpacing*2), view.size.height/2-ellHeight/22);
to = new Point(view.size.width/2 + (nlSpacing*2), view.size.height/2+ellHeight/22);
var nlL84 = new Path.Line(from, to);
nlL84.strokeColor = 'black';

from = new Point(view.size.width/2 + (nlSpacing*3), view.size.height/2-ellHeight/12);
to = new Point(view.size.width/2 + (nlSpacing*3), view.size.height/2+ellHeight/52);
var nlL93 = new Path.Line(from, to);
nlL93.strokeColor = 'black';

from = new Point(view.size.width/2 + (nlSpacing*4), view.size.height/2-ellHeight/52);
to = new Point(view.size.width/2 + (nlSpacing*4), view.size.height/2+ellHeight/52);
var nlL102 = new Path.Line(from, to);
nlL102.strokeColor = 'black';


from = new Point(view.size.width/2 + (nlSpacing*5), view.size.height/2-ellHeight/52);
to = new Point(view.size.width/2 + (nlSpacing*5), view.size.height/2+ellHeight/52);
var nlL111 = new Path.Line(from, to);
nlL111.strokeColor = 'black';



// // the right repeated 15 min marks
for (var step = 0; step < totalSteps; step++) {  
    var from = new Point(view.size.width/2 + (internval*step), view.size.height/2-ellHeight/102);
    var to = new Point(view.size.width/2 + (internval*step), view.size.height/2+ellHeight/102);
    stepLines.push(new Path.Line(from, to));
    stepLines[stepLines.length-1].strokeColor = 'black';
    stepLines[stepLines.length-1].opacity=0.35;
    if (step  % 4 == 0){
        stepLines[stepLines.length-1].opacity=0;
    }
}


var nlR57Text5 = new PointText(new Point(view.size.width/2 + (nlSpacing*1), view.size.height/2-ellHeight/38));
nlR57Text5.justification = textJust
nlR57Text5.fillColor = textFillColor
nlR57Text5.content = '7';
nlR57Text5.fontWeight = textFontWeight
nlR57Text5.fontSize = textFontSize
nlR57Text5.opacity = textOpacity

var nlR57Text7 = new PointText(new Point(view.size.width/2 + (nlSpacing*1), view.size.height/2+ellHeight/22));
nlR57Text7.justification = textJust
nlR57Text7.fillColor = textFillColor
nlR57Text7.content = '5';
nlR57Text7.fontWeight = textFontWeight
nlR57Text7.fontSize = view.size.width/70;
nlR57Text7.rotation = 180;
nlR57Text7.fontSize = textFontSize
nlR57Text7.opacity = textOpacity




var nlR48Text4 = new PointText(new Point(view.size.width/2 + (nlSpacing*2), view.size.height/2-ellHeight/19));
nlR48Text4.justification = textJust
nlR48Text4.fillColor = textFillColor
nlR48Text4.content = '8';
nlR48Text4.fontSize = view.size.width/70;
nlR48Text4.fontWeight = 'bold';
nlR48Text4.fontSize = textFontSize
nlR48Text4.opacity = textOpacity


var nlR48Text8 = new PointText(new Point(view.size.width/2 + (nlSpacing*2), view.size.height/2+ellHeight/15));
nlR48Text8.justification = textJust
nlR48Text8.fillColor = textFillColor
nlR48Text8.content = '4';
nlR48Text8.fontWeight = textFontWeight
nlR48Text8.rotation = 180;
nlR48Text8.fontSize = view.size.width/70;
nlR48Text8.opacity = textOpacity
nlR48Text8.fontSize = textFontSize


var nlR39Text3 = new PointText(new Point(view.size.width/2 + (nlSpacing*3), view.size.height/2-ellHeight/11));
nlR39Text3.justification = textJust
nlR39Text3.fillColor = textFillColor
nlR39Text3.content = '9';
nlR39Text3.fontSize = view.size.width/70;
nlR39Text3.fontWeight = 'bold';
nlR39Text3.fontSize = textFontSize
nlR39Text3.opacity = textOpacity


var nlR39Text9 = new PointText(new Point(view.size.width/2 + (nlSpacing*3), view.size.height/2+ellHeight/24));
nlR39Text9.justification = textJust
nlR39Text9.fillColor = textFillColor
nlR39Text9.content = '3';
nlR39Text9.fontWeight = textFontWeight
nlR39Text9.rotation = 180;
nlR39Text9.fontSize = view.size.width/70;
nlR39Text9.opacity = textOpacity
nlR39Text9.fontSize = textFontSize


var nlR210Text2 = new PointText(new Point(view.size.width/2 + (nlSpacing*4), view.size.height/2-ellHeight/40));
nlR210Text2.justification = textJust
nlR210Text2.fillColor = textFillColor
nlR210Text2.content = '10';
nlR210Text2.fontSize = view.size.width/70;
nlR210Text2.fontWeight = 'bold';
nlR210Text2.fontSize = textFontSize
nlR210Text2.opacity = textOpacity


var nlR210Text10 = new PointText(new Point(view.size.width/2 + (nlSpacing*4), view.size.height/2+ellHeight/25));
nlR210Text10.justification = textJust
nlR210Text10.fillColor = textFillColor
nlR210Text10.content = '2';
nlR210Text10.fontWeight = textFontWeight
nlR210Text10.rotation = 180;
nlR210Text10.fontSize = view.size.width/70;
nlR210Text10.opacity = textOpacity
nlR210Text10.fontSize = textFontSize

var nlR111Text1 = new PointText(new Point(view.size.width/2 + (nlSpacing*5), view.size.height/2-ellHeight/40));
nlR111Text1.justification = textJust
nlR111Text1.fillColor = textFillColor
nlR111Text1.content = '11';
nlR111Text1.fontSize = view.size.width/70;
nlR111Text1.fontWeight = 'bold';
nlR111Text1.fontSize = textFontSize
nlR111Text1.opacity = textOpacity


var nlR111Text11 = new PointText(new Point(view.size.width/2 + (nlSpacing*5), view.size.height/2+ellHeight/25));
nlR111Text11.justification = textJust
nlR111Text11.fillColor = textFillColor
nlR111Text11.content = '1';
nlR111Text11.fontWeight = textFontWeight
nlR111Text11.rotation = 180;
nlR111Text11.fontSize = view.size.width/70;
nlR111Text11.opacity = textOpacity
nlR111Text11.fontSize = textFontSize


var nlR6Text6 = new PointText(new Point(view.size.width/2 + (nlSpacing*2), view.size.height/2+ellHeight/3.17));
nlR6Text6.justification = textJust
nlR6Text6.fillColor = textFillColor
nlR6Text6.content = '6';
nlR6Text6.fontWeight = textFontWeight
nlR6Text6.fontSize = view.size.width/70;
nlR6Text6.opacity = textOpacity
nlR6Text6.fontSize = textFontSize
nlR6Text6.rotation = 180;
  



function onFrame(event) {
  if (event.count % 50 === 0) {

    var timestamp = Date.now();
    
    document.getElementById('digital').innerHTML = moment(timestamp, "x").format('ddd hh:mm:a'); 
    
    var dt = new Date(timestamp);   


    var oneMinPx = (eclipseeR * 2) / (1440/2)

    var isOdd = false;
    if (dt.getDate() % 2 != 0) {
        isOdd = true
    }
    var dt = new Date(timestamp);
    var ampm = dt.getHours() >= 12 ? 'pm' : 'am';
    if (isOdd){
        if (ampm=='pm'){
            // going east to west, heading twoards midnight
            var base = (view.size.width/2) - (eclipseeR * 2)
            var currMin = 60 * (dt.getHours()-12) + dt.getMinutes()
            var currPos = base + (oneMinPx*currMin)
        }else{
            var base = (view.size.width/2)
            var currMin = 60 * dt.getHours() + dt.getMinutes()
            var currPos = base - (oneMinPx*currMin)
        }
    }else{
        if (ampm=='pm'){
            // going east to west, heading twoards midnight
            var base = (view.size.width/2) + (eclipseeR * 2)
            var currMin = 60 * (dt.getHours()-12) + dt.getMinutes()
            var currPos = base - (oneMinPx*currMin)
        }else{
            var base = (view.size.width/2)
            var currMin = 60 * dt.getHours() + dt.getMinutes()
            var currPos = base + (oneMinPx*currMin)
        }
    }    
    
    var eclipserX = currPos

    
    var position = new Point(eclipserX, eclipserY);
    eclipser.position = position
  }
}

