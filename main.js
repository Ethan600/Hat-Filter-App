right_eye_x = 0;
right_eye_y = 0;
left_eye_x = 0;
left_eye_y = 0;

function preload(){
 img = loadImage("https://i.postimg.cc/C1XrfsmF/download-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
  if(results.length > 0){

      console.log(results);

      right_eye_x = results[0].pose.rightEye.x;
      right_eye_y = results[0].pose.rightEye.y;
      left_eye_x = results[0].pose.leftEye.x - 125;
      left_eye_y = results[0].pose.leftEye.y - 125;
      console.log("Right eye's x =" + right_eye_x);
      console.log("Right eye's y =" + right_eye_y);
      console.log("left eye's x =" + left_eye_x);
      console.log("Right eye's y =" + left_eye_y);
  }    


}

function draw(){
   image(video, 0, 0, 300, 300);
   image(img, left_eye_x, left_eye_y, 200, 100)
}

function takeSnapshot(){
    save("ClownNoseFilter.png");
}