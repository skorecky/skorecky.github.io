infile = File::open('music_list.csv', 'r')
outfile = File::open('outfile.txt', 'w')

header = infile.gets
hdr_cols = header.split(',').collect {|h| h.strip}

name_idx = hdr_cols.index('name') || (raise Exception, 'name')
col1_idx = hdr_cols.index('col1') || (raise Exception, '1')
col3_idx = hdr_cols.index('col3') || (raise Exception, '3')

# write the output header
outfile.puts('id|col3|col1')
# write each line with only columns we want
infile.each do |line|
  cols = line.split('|')
  line = []
  line << cols[id_idx].chomp
  line << cols[col3_idx].chomp
  line << cols[col1_idx].chomp
  outfile.puts(line.join('|'))
end

outfile.close
infile.close