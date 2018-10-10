package mp.dw.db.document;

import mp.dw.db.GenericDAO;

public interface DocStageDAO extends GenericDAO<DocStage, Long> {
	public Iterable<DocStage> getByDocId(Long docId);
	public void deleteByDocId(Long docId);
}
