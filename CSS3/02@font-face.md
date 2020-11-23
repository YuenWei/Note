### 字体图标

##### @font-face

**注意：** Internet Explorer 8 以及更早的版本不支持新的 @font-face 规则

先定义字体的名称（比如 myFirstFont），然后指向该字体文件。

```
<style> 
@font-face{
	font-family: myFirstFont;
	src: url(sansation_light.woff);  
	// src: url(sansation_light.woff) format ('woff'),url(sansation_light.ttf) format ('ttf'),; 
} 
div{font-family:myFirstFont;}
</style>
```

