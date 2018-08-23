function xxx

'reset'
'set x 1 96'
'set y 1 48'
z=1
zmax=8

'set fwrite -be -sq diaheat_jja_eqafrica_decadaltrend_t30.grd'
'set gxout fwrite'

while (z<=zmax)
 'set z 'z
*tropics only
 'output=const(maskout(diaheat,-(abs(lat)-30)),0,-u)'
*DJF south america 260-340; central pacific 150-240; indian ocean 60-120
*JJA south america 240-320; central pacific 150-240; indian ocean 60-150; Eq. Africa -10-60
 'output2=const(maskout(output,lon-(-10)),0,-u)'
*further
 'output3=const(maskout(output2,(60-lon)),0,-u)'
 if (z>=2 & z<=6)
  'd output3*pow(1000/lev,-0.286)*10'
 else
  'd output3*0.0'
 endif
 z=z+1
endwhile

'disable fwrite'

return
