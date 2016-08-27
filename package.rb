require 'rubygems'
require 'zip'

# Delete existing file
folder = Dir.pwd
zipfile_name = folder + "/drumpfinator.zip"
File.delete(zipfile_name) if File.exist?(zipfile_name)

# Get files to zip
input_files = Dir.glob("**/*")
input_files.delete(File.basename(__FILE__))
input_files.delete('README.md')

# Create new archive
Zip::File.open(zipfile_name, Zip::File::CREATE) do |zipfile|
  input_files.each do |filename|
    zipfile.add(filename, folder + '/' + filename)
  end
end