const path = require('path');// �����̳� ���͸� ��θ� �ٷ�� ���� NodeJS �⺻ ���

module.exports = {
	//������
	entry: {
		app : path.join(__dirname, 'main.js') //__dirname ���� ������ ���
	},
	//������� ���� ����
	output : {
		filename : '[name].js', // app.js
		path : path.join(__dirname, 'dist')
	},
	module : {},
	plugins : ''
}