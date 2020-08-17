function createNext(str) {
	let x = 1,
		y = 0
	const len = str.length
	const next = Array(len).fill(0)
	while (x < len) {
		if (str[x] === str[y]) {
			next[x++] = ++y
		} else {
			if (y > 0) y = next[y - 1]
			else x++
		}
	}
	return next
}

function kmpMatch(haystack, needle) {
	if (!needle || haystack === needle) return 0
	let x = 0,
		y = 0
	const next = createNext(needle)
	while (x <= haystack.length) {
		if (y >= needle.length) return x - y
		if (haystack[x] === needle[y]) {
			x++
			y++
			continue
		} else {
			if (y > 0) {
				y = next[y - 1]
			} else {
				x++
			}
		}
	}
	return -1
}

module.exports = kmpMatch
