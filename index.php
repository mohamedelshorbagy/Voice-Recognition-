<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8" />
        <title>This is Test</title>
        <link rel="stylesheet" href="style.css?v1.0" />
    
    </head>
    <body>
    
    <form id="labnol" method="get">
  <div class="speech">
    <input type="text" name="q" id="transcript" placeholder="Speak" />
    
</div>
        
</form>
        
        
            <button id="en-lang" onclick="startDictation2();">English</button>
            <button id="ar-lang" onclick="startDictation();">Arabic</button>
        
        
        <p>Note : This SpekingBot Just for the English</p>
            <!-- Speak -->
<div class='speakLoud'>
  <input id='speakLoud' type='button' value='🔊 Play' />
        <!-- End of Speak -->
    
        </div>
    
 <div class="test"></div>
 
        
        
        <script src="jquery-1.11.3.min.js"></script>
        <script src="responsivevoice.js"></script>
        <script src="script.js?v1.0"></script>
    </body>




</html>