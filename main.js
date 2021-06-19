function preload(){

}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color_var = "";
}
function draw(){
    image(video, 0, 0, 640, 480)
    tint(tint_color_var);
    if(document.getElementById('filterName').value == "THRESHOLD"){
        filter(THRESHOLD);
    }
    if(document.getElementById('filterName').value == "GRAY"){
        filter(GRAY);
    }
    if(document.getElementById('filterName').value == "OPAQUE"){
        filter(OPAQUE);
    }
    if(document.getElementById('filterName').value == "INVERT"){
        filter(INVERT);
    }
    if(document.getElementById('filterName').value == "POSTERIZE"){
        filter(POSTERIZE, 4);
    }
    if(document.getElementById('filterName').value == "BLUR"){
        filter(BLUR, 4);
    }
    if(document.getElementById('filterName').value == "ERODE"){
        filter(ERODE, 4);
    }
    if(document.getElementById('filterName').value == "DILATE"){
        filter(DILATE, 4);
    }
    
}
function change_tint(){
    tint_color_var = document.getElementById('tintColorName').value;
}
function take_snapshot(){
    save('Your Image')
}