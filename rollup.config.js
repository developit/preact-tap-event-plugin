import babel from 'rollup-plugin-babel';
import es3 from 'rollup-plugin-es3';

export default {
	useStrict: false,
	plugins: [
		babel({
			babelrc: false,
			sourceMap: true,
			exclude: 'node_modules/**',
			presets: [
				['es2015', { modules:false, loose:true }],
				'stage-0'
			],
			plugins: [
				'transform-class-properties',
				['transform-react-jsx', { pragma:'h' }]
			]
		}),
		es3()
	]
};
