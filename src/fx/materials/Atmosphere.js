fx.ShadersEngine.create("Atmosphere", {

	vertex: [
		'varying vec3 vNormal;',
		'void main(){',
		'	// compute intensity',
		'	vNormal		= normalize( normalMatrix * normal );',
		'	// set gl_Position',
		'	gl_Position	= projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
		'}',
	].join('\n'),

	fragment: [
		'uniform float coeficient;',
		'uniform float power;',
		'uniform vec3  glowColor;',

		'varying vec3  vNormal;',

		'void main(){',
		'	float intensity	= pow( coeficient - dot(vNormal, vec3(0.0, 0.0, 1.0)), power );',
		'	gl_FragColor	= vec4( glowColor * intensity, 1.0 );',
		'}',
	].join('\n'),

	options: {
		side: THREE.FrontSide,
		blending: THREE.AdditiveBlending,
		transparent: true,
		depthWrite: false,
	},

	uniforms: {
		coeficient	: {
			type	: "f",
			value	: 1.0
		},
		power		: {
			type	: "f",
			value	: 2
		},
		glowColor	: {
			type	: "c",
			value	: new THREE.Color('pink')
		},
	},

	attributes: {

	},
	
});
