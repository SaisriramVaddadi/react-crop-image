const FileUploader = ({ setFilesData }) => {
  const handleFilesUpload = (e) => {
    const files = e.target.files;
    const metaData = Object.keys(files).map((key) => {
      console.log(key);
      return {
        name: files[key].name,
        type: files[key].type,
        size: `${parseFloat(files[key].size / (1024 * 1024)).toFixed(2)} MB`,
      };
    });
    console.log(metaData);
    setFilesData(metaData);
  };
  return (
    <div>
      <input type="file" multiple accept="png" onChange={handleFilesUpload} />
    </div>
  );
};

export default FileUploader;
