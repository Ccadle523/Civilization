/*
 * 控制宇宙中文明之间互动的模块
 */

const cosmos	= require('./classCosmos');
const libCiv	= require('./classCivilization');

function classSociety () {
	this.civilizations = [new libCiv()];
}
classSociety.prototype.evolute = function () {
	var i, l = this.civilizations.length, civ;
	
	// 文明独立发展
	for (i = 0; i < l; i += 1) {
		this.civilizations[i].grow();
	}
	
	// 每个文明探索新的星球
	for (i = 0; i < l; i += 1) {
	}

	var aveCiv = 0, aveExp = 0, aveRes = 0;
	for (i = 0; i < l; i += 1) {
		civ = this.civilizations[i];
		aveCiv += civ.civilization;
		aveExp += civ.explore;
	}
	aveCiv /= l;
	aveExp /= l;
	aveRes /= i;
	
	return [aveCiv, aveExp, aveRes];
};

module.exports = classSociety;