# update_heatexp
Files for running diabatic heating experiments with SPEEDY Ver. 41.

Some necessary commands to create the appropriate input file of anomalous diabatic heating:

cdo remapbil,gridgaussian.txt

cdo intlevel,950,835,685,510,340,200,95,25

And then use xsea_diaheatinputforspeedy.gs to capture the area you want, and set outside of it 0. The diaheat_jja_indianoc_decadaltrend_t30.ctl file is the template for the grd file.

Historical diabatic heating diagnosed using the "residual method" and ERAI can be downloaded here:
https://www.dropbox.com/s/9tmi58x0o237id7/erai_diaheat_mon_1979_2016_ver2017oct18.nc?dl=0
