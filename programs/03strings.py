#A string is defined as collection of character started from 0 to end of number
str="Darkness is absolute power"
print(str)
#To know string length
print(len(str))

#To print the the dingle charaters in the string we use [character num]
print(str[3])

#To print the range of characters we use the string[0 : range charcter]
print(str[0:8])

#To print by skiping character using the slice of range[0:range:slice]
print(str[0::3])

#To reverse the string in the python using slicing
print(str[::-1])

#To count the character repeated in the string
print(str.count("e"))

#To capitalize the total string
print(str.upper())

#To find the someting in the string
print(str.find('is'))

#To replace characters of strings with other
print(str.replace("absolute","infinte"))
