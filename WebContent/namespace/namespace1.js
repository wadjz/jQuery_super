/**
 * A.B.C.D.E.F.G.H
 */
function A(){}
function b(){}
function c(){}
function d(){}
function e(){}
function f(){}
function g(){}
function h(){alert('hh');}

A.B = b;
A.B.C = c;
A.B.C.D = d;
A.B.C.D.E = e;
A.B.C.D.E.F = f;
A.B.C.D.E.F.G = g;
A.B.C.D.E.F.G.H = h;

A.B.C.D.E.F.G.H();

