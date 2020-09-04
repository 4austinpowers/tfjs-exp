function setup() {
	createCanvas(windowWidth, windowHeight);

	// const values = [];
	// for (let i = 0; i < 15; i++) {
	// 	values[i] = random(0, 255);
	// }
	// const shape = [5, 3];


	// const a = tf.tensor(values, shape, 'int32');
	// const b = tf.tensor(values, shape, 'int32');
	// const bb = b.transpose();
	// const c = a.matMul(bb);

	// c.print();
	//const data = tf.tensor([0, 0, 127, 255, 1, 0, 200, 200], [2, 2, 2]);
	// tens.print();
	// tens.array(3).then(array => console.log(array));

	// const vtens = tf.variable(tens);
	// console.log(vtens);
	// tens.data().then(function (stuff) {
	// 	console.log(stuff);
	// })
	//console.log(data);
}

function draw() {
	// frameRate(1);
	const values = [];
	for (let i = 0; i < 150000; i++) {
		values[i] = random(0, 255);
	}
	const shape = [500, 300];


	const a = tf.tensor(values, shape, 'int32');
	const b = tf.tensor(values, shape, 'int32');
	const b_t = b.transpose();
	const c = a.matMul(b_t);

	c.print();

	//* use of TF DISPOSE to clear memory
	a.dispose();
	b.dispose();
	c.dispose();
	b_t.dispose();

	console.log(tf.memory().numTensors);

	//* USE OF TF TIDY to clear memory

	tf.tidy(function () {
		const a = tf.tensor(values, shape, 'int32');
		const b = tf.tensor(values, shape, 'int32');
		const b_t = b.transpose();
		const c = a.matMul(b_t);

		c.print();

		a.dispose();
		b.dispose();
		c.dispose();
		b_t.dispose();

		console.log(tf.memory().numTensors);
	})

}