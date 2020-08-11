let m = 0
let n = -1

function match(target, pattern) {
	const patternArr = pattern.split('')
	const targetArr = target.split('')

	if (target == null || pattern == null) return false
	if (targetArr.length < patternArr.length) return false
	if (targetArr.length === patternArr.length) {
		let i = 0
		for (; i < targetArr.length; i++) {
			if (targetArr[i] !== patternArr[i]) return false
		}
		return true
	}

	let i = 0
	for (; i < targetArr.length; i++) {
		m = i
		const res = _match(targetArr[m], patternArr[++n])
		if (!res) n = 0
		if (n + 1 === patternArr.length) return true
  }
  
	return false
}

function _match(t, p) {
	console.log(t, p)
	return t === p
}

module.exports = match
