var initial_volume = document.querySelector('#volume');
var video = document.querySelectorAll('video');
var pop_up = document.querySelector(".main .title .pop-up");
var mic = document.querySelector('.main .main-content .left .bottom-content .mic-btn');
var mute = document.querySelector('#volume_icon')
let sound = false;

/*initial_volume.addEventListener('change', function(e){
    video.initial_volume = e.currentTarget.value / 100;
    mute.innerHTML = '<i class="material-icons">volume_down</i>';
});*/
function change_sound(){
    video.volume = initial_volume.value / 100;
    mute.innerHTML = '<i class="material-icons">volume_down</i>';
}
//fuction for mute the sound of entire meeting
function mute_sound(){
    video.initial_volume = 0;
    initial_volume.value = 0;
    mute.innerHTML = '<i class="material-icons">volume_mute</i>';
    mute.setAttribute("style", "margin-right: 32px");
}
//pop-up code for share
function popup(){
    pop_up.classList.toggle("show");
}
//buttons toggle functions
function ss_toggle(){

}
function mic_toggle(){
    if(sound == false){
        open_mic();
    }else{
        close_mic();
    }
}
function open_mic(){
    sound = true;
    mic.innerHTML = '<i class="material-icons">mic</i>';
}
function close_mic(){
    sound = false;
    mic.innerHTML = '<i class="material-icons">mic_off</i>';
}
function end_call(){

}
function video_toggle(){

}
function rec_toggle(){

}