package mp.dw.db.document;

import mp.dw.db.GenericDAO;

public interface AttachmentDAO extends GenericDAO<Attachment, Long> {

	public Iterable<Attachment> getByDoc(Document doc);
}
