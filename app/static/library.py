from org.transcrypt.stubs.browser import *
import random

def gen_random_int(number, seed):
	ls = [i for i in range(number)]
	random.seed(seed)
	random.shuffle(ls)
	return ls

def generate():
	number = 10
	seed = 200
	# call gen_random_int() with the given number and seed
	# store it to the variable array
	array = gen_random_int(number,seed)

	# convert the items into one single string 
	# the number should be separated by a comma
	# and a full stop should end the string.
	str_array = []
	for i in array:
		str_array.append(str(i))
	array_str = ", ".join(str_array) + "."

	# This line is to placed the string into the HTML
	# under div section with the id called "generate"	
	document.getElementById("generate").innerHTML = array_str


def sortnumber1():
	'''	This function is used in Exercise 1.
		The function is called when the sort button is clicked.

		You need to do the following:
		- get the list of numbers from the "generate" HTML id, use document.getElementById(id).innerHTML
		- create a list of integers from the string of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	array_str = document.getElementById("generate").innerHTML
	nofullstop = array_str[:-1]
	str_list = nofullstop.split(",")
	int_list = []
	for i in str_list:
		int_list.append(int(i))
	
	n = len(int_list)
	for outer_index in range(1,n):
		inner_index = outer_index
		temp_var = int_list[inner_index]
		while (inner_index>0) and (temp_var<int_list[inner_index-1]):
			int_list[inner_index] = int_list[inner_index-1]
			inner_index = inner_index-1
		int_list[inner_index] = temp_var
	
	list1 = []
	for i in int_list:
		list1.append(str(i))
	array_str = ",".join(list1)+"."
	
	document.getElementById("sorted").innerHTML = array_str

def sortnumber2():
	'''	This function is used in Exercise 2.
		The function is called when the sort button is clicked.

		You need to do the following:
		- Get the numbers from a string variable "value".
		- Split the string using comma as the separator and convert them to 
			a list of numbers
		- call your sort function, either bubble sort or insertion sort
		- create a string of the sorted numbers and store it in array_str
	'''
	# The following line get the value of the text input called "numbers"
	value = document.getElementsByName("numbers")[0].value

	# Throw alert and stop if nothing in the text input
	if value == "":
		window.alert("Your textbox is empty")
		return

	# Your code should start from here
	# store the final string to the variable array_str
	
	int_list1 = value.split(",")
	int_list = []

	for i in int_list1:
		int_list.append(int(i))

	n = len(int_list)
	for outer_index in range(1,n):
		inner_index = outer_index
		temp_var = int_list[inner_index]
		while (inner_index>0) and (temp_var<int_list[inner_index-1]):
			int_list[inner_index] = int_list[inner_index-1]
			inner_index = inner_index-1
		int_list[inner_index] = temp_var
	
	list1 = []
	for i in int_list:
		list1.append(str(i))
	array_str = ", ".join(list1)+"."

	document.getElementById("sorted").innerHTML = array_str


