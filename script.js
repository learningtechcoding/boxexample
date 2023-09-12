// gsap.to(".box", {
//     x: 500,
//     y: 100,
//     duration: 2,
//     rotate: 360,
//     scale:2
    
// });


var tt = gsap.timeline({ repeat: 2, repeatDelay: 1 });

// gsap.to(".box", {
//   x: 500,
//   y: 100,
//   duration: 4,
//   rotate: 360,
//     scale: 2,
//     repeat: -1,
//     yoyo: true,
//     opacity:0,
//     stagger:4
    
// });

tt.to("#box1", {
  x: 500,
    duration: 4,
     
});

tt.from("#master", {
    opacity: 0,
    
},5);


tt.to("#box2", {
  x: 500,
  duration: 2,
   
});

// gsap.to("#box3", {
//   x: 500,
//   duration: 4,
//   delay: 8,
//   repeat: 1,
//   yoyo: true,
// });