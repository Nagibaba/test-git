// Anagram

// "silent" = "listen"
// {s: 1} {a}

const isAnagram = (str1, str2) => {
	str1Sorted = str1.split('').sort().join('')
	str2Sorted = str2.split('').sort().join('')
	return str1Sorted === str2Sorted
	
	
}

const str1 = 'silent'
const str2 = 'listen'
console.log(isAnagram(str1, str2))
