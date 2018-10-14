package mp.dw.db.document;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "DW_ATTACH")
public class Attachment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ManyToOne
	@Fetch(FetchMode.JOIN)
	@JoinColumn(referencedColumnName = "id", nullable = false)
	private Document document;
	
	@Column(nullable = false)
	private String description;
	
	@Column(nullable = false)
	private String fileName;
	
	@Column(nullable = false)
	private String fileType;

	@Column(nullable = false)
	@Lob
	private byte[] file;
	
	

	public Attachment() {}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Document getDocument() {
		return document;
	}

	public void setDocument(Document document) {
		this.document = document;
	}

	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getFile() {
		return file;
	}

	public void setFile(byte[] file) {
		this.file = file;
	}

	@Override
	public boolean equals(Object other) {
		if(this == other)
			return true;
		if(!(other instanceof Attachment))
			return false;
		final Attachment otherC = (Attachment) other;
		EqualsBuilder eb = new EqualsBuilder();
		eb.append(otherC.document.getInvNo(), this.document.getInvNo());
		eb.append(otherC.document.getInvDt(), this.document.getInvDt());
		eb.append(otherC.document.getSellersName(), this.document.getSellersName());
		eb.append(otherC.document.getGross(), this.document.getGross());
		eb.append(otherC.getDescription(), this.getDescription());
		eb.append(otherC.getFileType(), this.getFileType());
		eb.append(otherC.getFileName(), this.getFileName());
		return eb.isEquals();
	}
	
	@Override
	public int hashCode() {
		HashCodeBuilder hcb = new HashCodeBuilder();
		hcb.append(this.document.getInvNo());
		hcb.append(this.document.getInvDt());
		hcb.append(this.document.getSellersName());
		hcb.append(this.document.getGross());
		hcb.append(this.getDescription());
		hcb.append(this.getFileType());
		hcb.append(this.getFileName());
		return hcb.toHashCode();
	}
}
