package mp.dw.db.document;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Version;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "DW_DOCITEM")
public class DocItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@Fetch(FetchMode.JOIN)
	@JoinColumn(referencedColumnName = "id", nullable = false)
	private Document document;
	
	@Column(nullable = false)
	private String description;
	
	@Column(nullable = false)
	private Float quantity;
	
	@Column(nullable = false, length = 100)
	private String unitType;
	
	private Float pricePerUnit;
	
	private Float discount;
	
	private Float price;
	
	@Column(length = 100)
	private String taxDescr;
	
	private Float taxRate;
	
	//NO SETTER FOR @Version FIELD!
	@Version
	@ColumnDefault("0")
	private int version;
	
	
	public DocItem() {}

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

	public Float getQuantity() {
		return quantity;
	}

	public void setQuantity(Float quantity) {
		this.quantity = quantity;
	}

	public String getUnitType() {
		return unitType;
	}

	public void setUnitType(String unitType) {
		this.unitType = unitType;
	}

	public Float getPricePerUnit() {
		return pricePerUnit;
	}

	public void setPricePerUnit(Float pricePerUnit) {
		this.pricePerUnit = pricePerUnit;
	}

	public Float getDiscount() {
		return discount;
	}

	public void setDiscount(Float discount) {
		this.discount = discount;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public String getTaxDescr() {
		return taxDescr;
	}

	public void setTaxDescr(String taxDescr) {
		this.taxDescr = taxDescr;
	}

	public Float getTaxRate() {
		return taxRate;
	}

	public void setTaxRate(Float taxRate) {
		this.taxRate = taxRate;
	}

	public int getVersion() {
		return version;
	}
	
	@Override
	public boolean equals(Object other) {
		if(this == other)
			return true;
		if(!(other instanceof DocItem))
			return false;
		final DocItem otherC = (DocItem) other;
		EqualsBuilder eb = new EqualsBuilder();
		eb.append(otherC.document.getInvNo(), this.document.getInvNo());
		eb.append(otherC.document.getInvDt(), this.document.getInvDt());
		eb.append(otherC.document.getSellersName(), this.document.getSellersName());
		eb.append(otherC.document.getGross(), this.document.getGross());
		eb.append(otherC.getDescription(), this.getDescription());
		eb.append(otherC.getPricePerUnit(), this.getPricePerUnit());
		eb.append(otherC.getPrice(), this.getPrice());
		eb.append(otherC.getTaxDescr(), this.getTaxDescr());
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
		hcb.append(this.getPricePerUnit());
		hcb.append(this.getPrice());
		hcb.append(this.getTaxDescr());
		return hcb.toHashCode();
	}
}
