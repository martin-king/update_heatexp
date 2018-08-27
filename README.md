# update_heatexp
Files for running diabatic heating experiments with SPEEDY Ver. 41.

Some necessary commands to create the appropriate input file of anomalous diabatic heating:

cdo remapbil,gridgaussian.txt

cdo intlevel,950,835,685,510,340,200,95,25

And then use xsea_diaheatinputforspeedy.gs to capture the area you want, and set outside of it 0.
