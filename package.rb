require 'rubygems'
require 'zip'

# Delete existing archive
folder = Dir.pwd
zipfile_name = folder + '/drumpfinator.zip'
File.delete(zipfile_name) if File.exist?(zipfile_name)

# Get files to zip
input_files = Dir.glob("**/*")
input_files.delete(File.basename(__FILE__))
input_files.delete('README.md')

# Create new archive
puts 'Packaging extension into file ' + zipfile_name
Zip::File.open(zipfile_name, Zip::File::CREATE) do |zipfile|
  input_files.each do |filename|
    print 'Adding file ' + filename + '...'
    zipfile.add(filename, folder + '/' + filename)
    print "Done\n"
  end
end