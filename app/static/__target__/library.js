// Transcrypt'ed from Python, 2022-09-22 15:29:09
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var gen_random_int = function (number, seed) {
	var ls = (function () {
		var __accu0__ = [];
		for (var i = 0; i < number; i++) {
			__accu0__.append (i);
		}
		return __accu0__;
	}) ();
	random.seed (seed);
	random.shuffle (ls);
	return ls;
};
export var generate = function () {
	var number = 10;
	var seed = 200;
	var array = gen_random_int (number, seed);
	var str_array = [];
	for (var i of array) {
		str_array.append (str (i));
	}
	var array_str = ', '.join (str_array) + '.';
	document.getElementById ('generate').innerHTML = array_str;
};
export var sortnumber1 = function () {
	var array_str = document.getElementById ('generate').innerHTML;
	var nofullstop = array_str.__getslice__ (0, -(1), 1);
	var str_list = nofullstop.py_split (',');
	var int_list = [];
	for (var i of str_list) {
		int_list.append (int (i));
	}
	var n = len (int_list);
	for (var outer_index = 1; outer_index < n; outer_index++) {
		var inner_index = outer_index;
		var temp_var = int_list [inner_index];
		while (inner_index > 0 && temp_var < int_list [inner_index - 1]) {
			int_list [inner_index] = int_list [inner_index - 1];
			var inner_index = inner_index - 1;
		}
		int_list [inner_index] = temp_var;
	}
	var list1 = [];
	for (var i of int_list) {
		list1.append (str (i));
	}
	var array_str = ','.join (list1) + '.';
	document.getElementById ('sorted').innerHTML = array_str;
};
export var sortnumber2 = function () {
	var value = document.getElementsByName ('numbers') [0].value;
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	var int_list1 = value.py_split (',');
	var int_list = [];
	for (var i of int_list1) {
		int_list.append (int (i));
	}
	var n = len (int_list);
	for (var outer_index = 1; outer_index < n; outer_index++) {
		var inner_index = outer_index;
		var temp_var = int_list [inner_index];
		while (inner_index > 0 && temp_var < int_list [inner_index - 1]) {
			int_list [inner_index] = int_list [inner_index - 1];
			var inner_index = inner_index - 1;
		}
		int_list [inner_index] = temp_var;
	}
	var list1 = [];
	for (var i of int_list) {
		list1.append (str (i));
	}
	var array_str = ', '.join (list1) + '.';
	document.getElementById ('sorted').innerHTML = array_str;
};

//# sourceMappingURL=library.map