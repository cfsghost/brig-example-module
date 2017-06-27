import QtQuick 2.3
import Brig.RandomString 1.0

Item {

	RandomString {
		id: randomString;
	}

	Text {
		anchors.centerIn: parent;
		font.family: 'Helvetica';
		font.pointSize: 72;
		text: randomString.value;
		color: '#e6fffa';
	}
}
