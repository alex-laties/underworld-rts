re.scene('home')
.enter(function(){
  
  re.currentLevel = re('level')[0];
  
  re.currentLevel.setup();
  
  re.screen.pos(-200, -120);
  
});