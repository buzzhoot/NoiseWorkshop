uniform float u_LinearDepthConstant;
uniform sampler2DRect textureMap;
varying vec4 v_Position;


void main() 
{ 
    float linearDepth = length(v_Position) * u_LinearDepthConstant;
    //float textureAlpha = texture2DRect( textureMap, gl_TexCoord[0].st ).a;

	float val = linearDepth;
	//float val = linearDepth * textureAlpha;

    // this now requires everything rendered into the shadowmap to have a 
    // texture bound, we can solve this/hack it by binding a white pixel texture.

	// Also this is a hack, what we're really interested in is masking stuff out, 
	// but this will make something semi-transparent seem further away

	vec4 result = vec4(val,val,val,val);

	gl_FragColor = result;
}
